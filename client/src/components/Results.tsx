import styled from "styled-components";
import { useAppSelector } from "../Hooks/hooks";
import { RootState } from "../App/store";
import ViewMore  from "./ViewMore.tsx";
import { plant } from '../../types.ts';

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 4em;
background: #404337;
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

export default function Results(){
    const queryResult = useAppSelector((state : RootState) => state.queryResult);
return(
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
)
}