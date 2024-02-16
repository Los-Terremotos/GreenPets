import styled from "styled-components";
import { RootState } from "../App/store";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { getNewQuestion } from "../Features/Questions/questionsSlice";
import { setResponse } from "../Features/Response/responseSlice";
import { gql, useLazyQuery } from "@apollo/client";
import {useEffect } from "react";
import { setQueryRes } from "../Features/QueryResult/queryResultSlice";

const Button = styled.button<{$currentQuestion? : string}>`
  height: 150px;
  width: 300px;
  background-color: #ffe8d6;
  color: #404337;
  border-radius: 20px;
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s; /* Added transition for smooth hover effect */
  &:hover {
    background-color: #404337;
    color: #ffe8d6;
  }
`;
const GreenThumbIcon = styled(FontAwesomeIcon)<{$index? : number}>`
  color: #04db0f;
   ${props => {
    if(props.$index === 0){
      return "opacity: 0.5;";
    }
    else if(props.$index === 1){
      return "opacity: 0.8;";
    }
    else{
      return "color: #048a09;";
    }
  }};
  margin-left: 10px;
  font-size: 30px;
  margin-top: 10px;
`

const GET_PLANTS = gql`
query PlantsBasicInfo($inputNumber: Int!, $inputString: String!) {
  plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {
    id
    common_name
    default_image {
      thumbnail
    }
    watering
  }
}
`;


export default function OptionChoice(props: {index: number, optionText: string, optionValue: string | number}){
    const questionsArr = useAppSelector((state: RootState) => state.questions);
    const currentQuestion = questionsArr[0];
    const dispatch = useAppDispatch();
    const response = {...useAppSelector((state : RootState) => state.response)};
    const [getPlantList, {loading, error, data}] = useLazyQuery(GET_PLANTS);
    if(loading)console.log(loading);
    if(error) console.log(error);
    console.log(response);
    useEffect(() =>{
        //Check to see if the query data is not undefined
        if(data){
        //Slice the data of 30 objects to 6 as agreed by team
        console.log('this is our data', data)
        const slicedData =  data.plantsBasicInfo.slice(0, 6);
        //Set the data of 6 to our global state
        dispatch(setQueryRes(slicedData));
        }
      }, [data, dispatch]);

    function checkQuestion(){
        if (currentQuestion.name !== "start") {
          response[currentQuestion.name] = props.optionValue;
          if(questionsArr.length === 2){
            getPlantList(
              {
              variables:{inputNumber: response.watering,inputString: response.indoor},
            });
          }
          dispatch(setResponse(response));

        
          }
       
        // CONSOLE AND CHECK FOR ERRORS WITH THE QUERY
      }

    function handleClick() {
        dispatch(getNewQuestion());
        checkQuestion();
        
      }
    return(
        <>
        <Button key={`btn${props.index}`} onClick={handleClick}>
           {currentQuestion.name === "watering" ? <GreenThumbIcon icon={faThumbsUp} $index={props.index}/>: props.optionText}
          </Button>
        </>
    );

}