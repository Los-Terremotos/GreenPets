import {QuestionsType} from '../../../types.ts';
import {createSlice} from '@reduxjs/toolkit';


const questionsArr : Array <QuestionsType> = [
{
    name: "start",
    question: "Let's find you a new green Pet!",
    options: ["Begin"]
  },
{
    name: 'indoor',
    question: 'Indoor or Outdoor Plant?',
    options: ['outdoor','indoor']
  },
{
    name: 'watering',
    question: 'How Green is your thumb?',
    options: [
      'A little green', 
      'Averagely Green',
      'Very green'
    ]
  },
  {
    name: 'loading',
    question: 'Loading....',
    options: []
  }
];

const questionSlice = createSlice({
    name: "questions",
    initialState: questionsArr,
    reducers: {
        getNewQuestion: (state) =>{
        const tempArr = [...state];
        tempArr.shift();
        return tempArr;
        }
    }
});
export const {getNewQuestion} = questionSlice.actions;
export default questionSlice.reducer;