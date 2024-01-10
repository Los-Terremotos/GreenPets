import { useAppSelector, useAppDispatch } from "../Hooks/hooks.ts";
import { RootState } from '../App/store.ts';
import { getNewQuestion } from '../Features/Questions/questionsSlice.ts';
import { setResponse} from '../Features/Response/responseSlice.ts';

export default function Questions() {
  const response = {...useAppSelector((state : RootState) => state.response)};
  const currentQuestion = useAppSelector((state: RootState) => state.questions[0]);
  const dispatch = useAppDispatch();
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