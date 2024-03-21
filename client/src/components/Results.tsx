import styled from "styled-components";
import {useAppSelector } from "../Hooks/hooks";
import { RootState } from "../App/store";
import ViewMore  from "./ViewMore.tsx";
import { plant } from '../../types.ts';
import {  DarkGreyGreen, LightGreyGreen,  } from '../themes';

const Wrapper = styled.div`
padding-top: 4em;
margin-top:45px;
max-width: 100%;
width: 100vw;
`;
const Name = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
// background: white;
// border-radius: 4px;
width: auto;
text-wrap: wrap;
height: 50px;
color: floralwhite;
font-weight: 200;
// box-shadow: 1px 1px 4px black;
`;
const Card = styled.div`
text-align: center;
width: 25%;
background-color: ${DarkGreyGreen.primary1.color};
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
width: 90%;
`;
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;



export default function Results(){
    const queryResult = useAppSelector((state : RootState) => state.queryResult);
return(
<Wrapper>
          <CardContainer>
            {queryResult.map((plant: plant) => (
              <Card key={plant.id}>
                <Name>{plant.common_name}</Name>
                {plant.default_image && plant.default_image.thumbnail && (
                  <Image src={plant.default_image.thumbnail} alt={plant.common_name} />
                )}
                <ViewMore plantId={plant.id}/>
              </Card>
            ))}
          </CardContainer>
</Wrapper>
)
}