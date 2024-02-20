import {QuestionsType} from '../../../types.ts';
import {createSlice} from '@reduxjs/toolkit';


const questionsArr : Array <QuestionsType> = [
{
    name: "start",
    question: "Let's find you a new green pet!",
    options: [{text:"Begin", value: ""}]
  },
{
    name: 'indoor',
    question: 'Are you looking for an indoor or outdoor plant?',
    options: [{text:'Outdoor', value: "outdoor"},{text:'Indoor', value:"indoor"}]
  },
{
    name: 'watering',
    question: 'How green is your thumb?',
    options: [
      {text:``, value: 2}, 
      {text:``, value: 3},
      {text:``, value: 4}
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
          console.log("get new question is firing");
        const tempArr = [...state];
        tempArr.shift();
        return tempArr;
        }
    }
});
export const {getNewQuestion} = questionSlice.actions;
export default questionSlice.reducer;