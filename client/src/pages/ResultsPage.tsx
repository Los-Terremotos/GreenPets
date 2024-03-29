import styled, { ThemeProvider } from "styled-components";
import { useAppSelector } from "../Hooks/hooks";
import { RootState } from "../App/store";
import ViewMore from "../components/ResultsPageComponents/ViewMore.tsx";
import { plant } from "../../types.ts";
import { useSelector } from 'react-redux';
import {  DarkGreyGreen, LightGreyGreen,  } from '../themes';

const ResultsPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4em;
  background-color: ${(props) => props.theme.primary2.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  max-width: 100%;
  width: 100vw;
`;

const ResultsTitle = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.secondary1.color};
  background-color: ${(props) => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 0.5em;
  transition: background-color 0.5s ease, color 0.5s ease;
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
  color: #75472f;
  box-shadow: 1px 1px 4px black;
`;

const Card = styled.ul`
  text-align: center;
  width: 25%;
  background: #a5a58d;
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
  color: #7e7e63;
  border-radius: 4px;
  box-shadow: 1px 1px 4px black;
`;

const Image = styled.img`
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px black;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default function Results() {
  const queryResult = useAppSelector((state: RootState) => state.queryResult);
  const themeState = useSelector((state : RootState) => state.lightModeToggle.lightMode);


  return (
    <>
      <ThemeProvider theme={themeState ? LightGreyGreen : DarkGreyGreen}>

        <ResultsPageContainer>

          <ResultsTitle>Your Green Pets </ResultsTitle>

          <CardWrapper>
            {queryResult.map((plant: plant) => (
              <Card key={plant.id}>
                <Name>{plant.common_name}</Name>
                {plant.default_image && plant.default_image.thumbnail && (
                  <Image
                    src={plant.default_image.thumbnail}
                    alt={plant.common_name}
                  />
                )}
                <Item>Watering: {plant.watering}</Item>
                <ViewMore plantId={plant.id} />
              </Card>
            ))}
          </CardWrapper>
          
        </ResultsPageContainer>

      </ThemeProvider>
    </>
    
  );
}
