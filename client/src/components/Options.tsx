import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { RootState } from "../App/store";
import { gql, useLazyQuery } from '@apollo/client';
import { setResponse} from '../Features/Response/responseSlice.ts';
import { getNewQuestion } from '../Features/Questions/questionsSlice.ts';
import { useEffect } from "react";
import { setQueryRes } from "../Features/QueryResult/queryResultSlice";
import { faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OptionChoice from "./OptionChoice.tsx";
import { OptionsType } from "../../types.ts";





export default function Options(){
    const questionsArr = useAppSelector((state: RootState) => state.questions);
    console.log(...questionsArr);
    const currentQuestion = questionsArr[0];    
    return(<>
        {currentQuestion.options.map(
            (option : OptionsType, i : number) =><OptionChoice index = {i} optionText = {option.text} optionValue = {option.value} />
            )};
            </>
    );
}