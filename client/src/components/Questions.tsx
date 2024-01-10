import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../App/store.ts';
import { getNewQuestion } from '../Features/questionsSlice';
import { setResponse} from '../Features/responseSlice.ts';

export default function Questions() {
  const response = {...useSelector((state : RootState) => state.response)};
  const currentQuestion = useSelector((state: RootState) => state.questions[0]);
  const dispatch = useDispatch();
  const currentOptions: Array<string> = currentQuestion.options;

  function handleClick(e: React.MouseEvent) {
    const btn: HTMLElement = e.target as HTMLElement;
    const btnText: string = btn.textContent!;
  
    if (currentQuestion.name !== "start") {
      response[currentQuestion.name] = currentQuestion.name === "watering" ? currentOptions.indexOf((btnText)) + 2 : btnText;
      dispatch(setResponse(response));
      console.log(response);
    }
    dispatch(getNewQuestion());
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