import { useAppSelector, useAppDispatch } from "../Hooks/hooks.ts";
import { RootState } from '../App/store.ts';
import { getNewQuestion } from '../Features/Questions/questionsSlice.ts';
import { setResponse} from '../Features/Response/responseSlice.ts';
import { setQueryRes } from "../Features/QueryResult/queryResultSlice.ts";
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from "react";
import styled from 'styled-components';
import ViewMore  from "./ViewMore.tsx";

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 4em;
background: #404337;
border-radius: 10px;
max-width: 100%;
`;
const Name = styled.ol`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: white;
border-radius: 4px;
width: auto;
text-wrap: wrap;
min-height: 50px;
color: #75472F;
box-shadow: 1px 1px 4px black;
`;
const Card = styled.ul`
text-align: center;
width: 25%;
background: #A5A58D;
font-size: 1.2em;
padding: 40px; 
border-radius: 10px;
margin: 10px;
box-shadow: 5px 5px 10px black;
`;
const Item = styled.ul`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: white;
width: auto;
text-wrap: wrap;
min-height: 50px;
color: #7E7E63;
border-radius: 4px;
box-shadow: 1px 1px 4px black;
`;

const Image = styled.img`
border-radius: 10px;
margin-top: 10px;
box-shadow: 1px 1px 4px black;

`;

const Button = styled.button`
  height: 150px;
  width: 300px;
  background-color: #ffe8d6;
  color: #404337;
  border-radius: 20px;
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s; /* Added transition for smooth hover effect */

  &:hover {
    background-color: #404337;
    color: #ffe8d6;
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

//interface for plant and the data types.
interface plant {
  id: string;
  common_name?: string;
  default_image?: {
    thumbnail: string;
  } | null; 
  watering?: string;
}

export default function Questions() {
  const response = {...useAppSelector((state : RootState) => state.response)};
  const queryResult = useAppSelector((state : RootState) => state.queryResult);
  const currentQuestion = useAppSelector((state: RootState) => state.questions[0]);
  const dispatch = useAppDispatch();
  const currentOptions: Array<string> = currentQuestion.options;
  
  const [getPlantList, {loading, error, data}] = useLazyQuery(GET_PLANTS);
  //Will rerender and will run first render and also when data is changed
  useEffect(() =>{
    //Check to see if the query data is not undefined
    if(data){
    //Slice the data of 30 objects to 6 as agreed by team
    console.log('this is our data', data)
    const slicedData =  data.plantsBasicInfo.slice(0, 6);
    //Set the data of 6 to our global state
    dispatch(setQueryRes(slicedData));
    }
  }, [data, dispatch]);

  if(loading) console.log(loading);
  if(error) console.log(error);
  
  console.log(`This is currently in state:`);
  console.log('this is our data we want to render', queryResult);
  
  function handleClick(e: React.MouseEvent) {
    //These two variables are seperated due to Typescript.
    const btn: HTMLElement = e.target as HTMLElement;
    const btnText: string = btn.textContent!;
    //So we don't record the user's answer when they click on begin
    if (currentQuestion.name !== "start") {
      //Will assign the response object at property of either watering or indoor to:
      //  If question name is watering: assign the value of the watering property to the index of the button text(the user clicked) + 2 (Values must be 2,3 and 4 as specified by the backend team)
      //  If question name is NOT watering then assign the value of the indoor property to the text of the button the user clicked.
      response[currentQuestion.name] = currentQuestion.name === "watering" ? currentOptions.indexOf((btnText)) + 2 : btnText;
      //Will initiate a rerender. Is overwriting state to a different value.
      dispatch(setResponse(response));
    if(currentQuestion.name === "watering"){
      //When a user clicks on an answer for the watering question it will run the query
      //With the user's answers as the variables.
      getPlantList(
        {
        variables:{inputNumber: response.watering,inputString: response.indoor},
      });
    }
  }
     //Will re render and get new questions Look at questionsSlice for function definition
     dispatch(getNewQuestion());
  }

  return (
    <>
    {/* If the data from the api is falsy(Empty) then keep displaying the questions*/}
    {
      !data && (
      <>
      <h1>{currentQuestion.question}</h1>
      <div className='btnContainer'>
        {currentOptions.map((option: string, i: number) => (
          <Button key={`btn${i}`} onClick={handleClick}>
            {option}
          </Button>
        ))}
      </div>
      </>
      )
  }
  {/* If the data from the api is truthy(not empty) then display results*/}
      {data && (
      <Wrapper>
  {queryResult.map((plant: plant) => (
    <Card key={plant.id}>
      <Name>{plant.common_name}</Name>
      {plant.default_image && plant.default_image.thumbnail && (
        <Image src={plant.default_image.thumbnail} alt={plant.common_name} />
      )}
      <Item>Watering: {plant.watering}</Item>
      <ViewMore plantId={plant.id}/>
    </Card>
  ))}
</Wrapper>
      )}
      </>
  );
}