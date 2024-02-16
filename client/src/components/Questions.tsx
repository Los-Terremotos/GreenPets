import { useAppSelector, useAppDispatch } from "../Hooks/hooks.ts";
import { RootState } from '../App/store.ts';
import {styled, createGlobalStyle } from 'styled-components';
import Options from "./Options.tsx";


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

export default function Questions() {
  const questionsArr = useAppSelector((state: RootState) => state.questions);
  const currentQuestion = questionsArr[0];
  console.log("Question rendering");
  return (
    <>
    <GlobalStyle />
      <h1>{currentQuestion.question}</h1>
      <div className='btnContainer'>
      <Options />
      </div>
    </>
  );
}