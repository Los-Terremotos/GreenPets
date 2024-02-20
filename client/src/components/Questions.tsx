import { useAppSelector, useAppDispatch } from "../Hooks/hooks.ts";
import { RootState } from '../App/store.ts';
import { getNewQuestion } from '../Features/Questions/questionsSlice.ts';
import { setResponse} from '../Features/Response/responseSlice.ts';
import { setQueryRes } from "../Features/QueryResult/queryResultSlice.ts";
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from "react";
import {styled, createGlobalStyle } from 'styled-components';
import { OptionsType, QuestionsType } from "../../types.ts";
import {thumbs} from "../assets";


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const Button = styled.button`
  height: 150px;
  width: 300px;
  background-color: white;
  color: #404337;
  border-radius: 20px;
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s; /* Added transition for smooth hover effect */

  &:hover {
    background-color: #404337;
    color: #ffe8d6;
  }
`;

const GreenThumbImg = styled.img`
  width: 40%;
`;

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
export default function Questions() {
  const response = {...useAppSelector((state : RootState) => state.response)};
  const questionArr : QuestionsType[] = useAppSelector((state: RootState) => state.questions);
  const currentQuestion = questionArr[0];
  const dispatch = useAppDispatch();
  const currentOptions: Array<OptionsType> = currentQuestion.options;
  
  const [getPlantList, {loading, error, data}] = useLazyQuery(GET_PLANTS);

  useEffect(() =>{
    if(data){
    const slicedData =  data.plantsBasicInfo.slice(0, 6);
    dispatch(setQueryRes(slicedData));
    }
  }, [data, dispatch]);

  if(loading) console.log(`LINE 130, loading: ${loading}`);
  if(error) console.log(`LINE 131, error: ${error}`);
  
  function handleClick(e: React.MouseEvent) {
    const btn: HTMLElement = e.target as HTMLElement;
    const btnNumber : number = parseInt(btn.id);
    const clickedOption = currentOptions[btnNumber];

    if (currentQuestion.name !== "start") {
      response[currentQuestion.name] = clickedOption.value;
      dispatch(setResponse(response));

    if(questionArr.length === 2){
      getPlantList(
        {
        variables:{inputNumber: response.watering,inputString: response.indoor},
      });
    }
  }
     dispatch(getNewQuestion());
  }

  return (
    <>
    <GlobalStyle />
    <h1>{currentQuestion.question}</h1>
    <div className='btnContainer'>
        {currentOptions.map((option: OptionsType, i: number) => (
          <Button id = {`${i}`} key={`btn${i}`} onClick={handleClick}>
            {currentQuestion.name === "watering" ? <GreenThumbImg src = {thumbs[i]} />: option.text}
          </Button>
        ))}
      </div>
      </>
  );
}