import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { RootState } from "../App/store";
import ViewMore  from "./ViewMore.tsx";
import { plant } from '../../types.ts';
import { setQueryRes } from "../Features/QueryResult/queryResultSlice.ts";
import { setCounter } from "../Features/Questions/questionsCounter.ts";
import questionsArr from "../questionsLibrary.tsx";
const Wrapper = styled.div`
// padding: 4em;
max-width: 100%;
width: 100vw;
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
color: #2a5938;
box-shadow: 1px 1px 4px black;
`;
const Card = styled.ul`
text-align: center;
width: 25%;
background: #2a5938;
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
color: #2a5938;
border-radius: 4px;
box-shadow: 1px 1px 4px black;
`;
const Image = styled.img`
border-radius: 10px;
margin-top: 10px;
box-shadow: 1px 1px 4px black;
`;
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const ResetBtn = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: floralwhite;
color: #2a5938;

&:hover {
  background-color: #2a5938;
  color: floralwhite;
}
`;

export default function Results(){
    const queryResult = useAppSelector((state : RootState) => state.queryResult);
    const dispatch = useAppDispatch();

    const reset = () =>{
      dispatch(setQueryRes([]));
      dispatch(setCounter(0));
      for(let i =1; i < questionsArr.length; i++){
        questionsArr[i].isAnswered = false;
      }
    }

return(
<Wrapper>
          <ResetBtn onClick = {reset}>Restart Search</ResetBtn>
          <CardContainer>
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
          </CardContainer>
</Wrapper>
)
}