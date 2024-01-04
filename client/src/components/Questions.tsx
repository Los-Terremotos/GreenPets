import { useState } from 'react';
import QuestionType from '../../types.ts';

interface Response {
  indoor: string,
  watering: number,
  [key: string]: string | number
}

//What will be sent to the backend. As stated by the backend team they require either a string of 'indoor' or outdoor and a number between 2 - 4 to make the neccessary
//query for the results.
const response: Response = {
  indoor: '',
  watering: 1
}


export default function Questions(props: { question: Array<QuestionType> }) {
  const [counter, setCounter] = useState(0);
  const currentQuestion: QuestionType = props.question[counter];
  const currentOptions: Array<string> = props.question[counter].options;
  console.log(`This is the current Question: ${currentQuestion.question}`);
  console.log(response);
  //What will run when the buttons are clicked
  function handleClick(e: React.MouseEvent) {
    const btn: HTMLElement = e.target as HTMLElement;
    const btnText: string = btn.textContent!;
  
    if (counter >= 1) {
      //Will assign a property within response using the question name and will assign it either a number that will represent what answer was chosen in the watering question or it will
      //assign it the button text if it is the indoor question.
      response[currentQuestion.name] = currentQuestion.name === "watering" ? currentOptions.indexOf((btnText)) + 2 : btnText;
    }
    //Updating the counter so that we may use it to move forward in the array of questions
    setCounter((prevCounter: number) => {
      return prevCounter += 1;
    })
  }

  return (
    <>
      <h1>{currentQuestion.question}</h1>
      <div className='btnContainer'>
        {currentOptions.map((option: string, i: number) => <button key={`btn${i}`} onClick={handleClick}>{option}</button>)}
      </div>
    </>
  );
}