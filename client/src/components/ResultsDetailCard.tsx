import React from 'react';
import styled from 'styled-components';
import { PlantInfo } from "../../types";
import { useDispatch } from 'react-redux';
import { closeDetailCard } from '../Features/DetailsCard/cardSlice';

interface ResultsDetailCardProps {
  data: {
    plantsMoreInfo: PlantInfo;
  }
}

const DetailCardContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 10px;
  overflow: scroll;
`;

const Item = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0A4C76;
  width: auto;
  text-wrap: wrap;
  min-height: 50px;
  color: #7e7e63;
  border-radius: 4px;
  box-shadow: 1px 1px 4px black;
`;

const ResultsDetailCard: React.FC<ResultsDetailCardProps> = ({ data }) => {
  const dispatch = useDispatch();
  
  const handleCloseDetailCard = () => {
    dispatch(closeDetailCard());
  }

  return (
    <>
      <DetailCardContainer>
        <p>Hello inside card</p>
        <Item>Scientific Name: {data.plantsMoreInfo.scientific_name}</Item>
        <Item>Sunlight: {data.plantsMoreInfo.sunlight}</Item>
        <Item>Water: {data.plantsMoreInfo.watering}</Item>
        <Item>
          Posionous to Pets: {data.plantsMoreInfo.poisonous_to_pets}
        </Item>
        <Item>Indoor: {data.plantsMoreInfo.indoor}</Item>
        <Item>Care level: {data.plantsMoreInfo.care_level}</Item>
        <Item>Description: {data.plantsMoreInfo.description}</Item>
        <button onClick={handleCloseDetailCard}>Shaddup</button>
      </DetailCardContainer>
    </>
  )
};

export default ResultsDetailCard;