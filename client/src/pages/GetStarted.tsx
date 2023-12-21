import Nav from '../components/Navbar';
import styled from 'styled-components';
import Questions from '../components/Questions';
import QuestionType from '../../types.ts';

const Main = styled.main`
padding-top: 45px;
display: grid;
justify-content: center;
height: 100vh;
text-align:center;

div{
  display: flex;
  justify-content: center;
}

button{
  height: 150px;
  width: 300px;
  background-color: #FFE8D6;
  color: #404337;
  border-radius: 20px;
  font-size: 18px;
}

button:hover{
  background-color: #404337;
  color: #FFE8D6;
}

h1{
  align-self: center;
  color: #404337;
}
`
// interface Questions {
//   name: string,
//   question: string,
//   options: Array<string>
// }

const questionZero: QuestionType = {
  name: "start",
  question: "Let's find you a new green Pet!",
  options: ["Begin"]
}
const questionOne: QuestionType  = {
  name: 'indoor',
  question: 'Indoor or Outdoor Plant?',
  options: ['outdoor','indoor']
}
const questionTwo: QuestionType = {
  name: 'watering',
  question: 'How Green is your thumb?',
  options: [
    'A little green', 
    'Averagely Green',
    'Very green'
  ]
}
const questionThree: QuestionType = {
  name: 'loading',
  question: 'Loading....',
  options: []
}


const questionsArr : Array <QuestionType> = [questionZero, questionOne, questionTwo, questionThree];


const GetStarted = () => {
  console.log("render");
  return (
    <div>
      <Nav />
      <Main>
        <Questions question  = {questionsArr}/>
      </Main>
    </div>
  )
}

export default GetStarted
