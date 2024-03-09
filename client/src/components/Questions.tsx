import { useAppSelector, useAppDispatch } from "../Hooks/hooks.ts";
import { RootState } from '../App/store.ts';
import { setResponse} from '../Features/Response/responseSlice.ts';
import { setQueryRes } from "../Features/QueryResult/queryResultSlice.ts";
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from "react";
import {styled, createGlobalStyle } from 'styled-components';
import { OptionsType, QuestionsType } from "../../types.ts";
import { thumbs} from "../assets"; // An array of thumb images from 0 - 2. Look at index.ts for more clarification.
import questionsArr from "../questionsLibrary.tsx";
import { setCounter } from "../Features/Questions/questionsCounter.ts";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const QuestionText = styled.h1`
  align-self: center;
  color: #2a5938;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    align-items: normal;
    justify-content: space-around;
    width: 100vw;
  }
`;
const Button = styled.button<{id : string, $currentQuestion : string}>`
  height: 150px;
  width: 300px;
  // background-color: #2a5938;
  background-color: floralwhite;
  color: #2a5938;
  border-radius: 20px;
  font-size: 1.5rem;
  transition: background-color 0.3s, color 0.3s; /* Added transition for smooth hover effect */
  ${ props => {
    const currentButtonId = parseInt(props.id);
    //Condition if question is watering then apply styles for thumb background img
    if(props.$currentQuestion === "watering"){
  return `
  background-image: url(${thumbs[currentButtonId]});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  `;
    }
  }
  }
  &:hover {
    background-color: #2a5938;
    color: floralwhite;
  }
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
  const counter = useAppSelector((state : RootState) => state.questionsCounter);
  const currentQuestion = questionsArr[counter];
  const currentOptions: Array<OptionsType> = currentQuestion.options;
  const dispatch = useAppDispatch();
  const questionLength = questionsArr.length;
  //Is defined but does not run at this moment
  const [getPlantList, {loading, error, data}] = useLazyQuery(GET_PLANTS);

  useEffect(() =>{
    //Will run once the data from the API is ready
    if(data){
    //Was determined that having a max of 6 plants was best may change in future
    const slicedData =  data.plantsBasicInfo.slice(0, 6);
    dispatch(setQueryRes(slicedData));
    }
  }, [data, dispatch]);
  
  function handleClick(e: React.MouseEvent) {
    const btn: HTMLElement = e.target as HTMLElement;
    //Grabs the clicked button's ID(0 - 2)
    const btnNumber : number = parseInt(btn.id);
    //Then we assign the variable the array of option object at index btnNumber(0-2)
    //Look at questionSlice to see what the option array looks like
    const clickedOption = currentOptions[btnNumber];
    //Will start recording and setting responses after the user hits start
    if (currentQuestion.name !== "start") {
      response[currentQuestion.name] = clickedOption.value;
      dispatch(setResponse(response));
    //Checks to see when we are done
    if(counter === (questionLength - 1)){
      //Run the query with the values in the response object
      getPlantList(
        {
        variables:{inputNumber: response.watering,inputString: response.indoor},
      });
      return;
    }
  }
    //Look at questionCounterSlice
    dispatch(setCounter(counter + 1));
  }

  function checkStatus(){
    if(error){
      return(
        <>
        <h1>{`ERROR: ${error}`}</h1>
        </>
      );
    }
    else if(loading){
      return (
        <>
        <h1>loading...</h1>
        </>
      );
    }
    else{
      return(
      <>
        <QuestionText>{currentQuestion.question}</QuestionText>
        <ButtonContainer>
        {currentOptions.map((option: OptionsType, i: number) => (
          <Button $currentQuestion = {currentQuestion.name} id = {`${i}`} key={`btn${i}`} onClick={handleClick}>
            {option.text}
          </Button>
        ))}
      </ButtonContainer>
      </>
      )
    }
    
  }

  return (
    <>
    <GlobalStyle />
    {checkStatus()} 
    </>
  );
}