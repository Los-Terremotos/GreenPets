import React from 'react';
import styled from 'styled-components';
import { PlantInfo } from "../../types";
import { useDispatch } from 'react-redux';
import { closeModal } from '../Features/modal/modalSlice';

interface ResultsDetailCardProps {
  data: {
    plantsMoreInfo: PlantInfo;
  }
}

const DetailCardContainer = styled.div`
  width: 80%;
  height: 80%;
  border: 2px solid white;
  border-radius: 10px;
  //overflow: scroll;
  background-color: floralwhite;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: fit-content;
  text-wrap: wrap;
  min-height: 50px;
  color: #7e7e63;
  border-radius: 4px;
  box-shadow: 1px 1px 4px black;
`;

const CloseModalBtn = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  font-size: 20px;
`;

const DetailTitle = styled.h1`
  color: ${props => props.theme.secondary1.color};
  background-color: ${props => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 0.5rem;
  transition: background-color 0.5s ease, color 0.5s ease;
`;
const DetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid pink;
  margin: 2rem 2rem;
  padding: 0 2rem;
`;

const ResultsDetailCard: React.FC<ResultsDetailCardProps> = ({ data }) => {
  const dispatch = useDispatch();
  

  const handleCloseModal = () => {
    console.log(`Close button inside modal`)
    dispatch(closeModal());
  }
  return (
    <>
      <DetailCardContainer>
        <CloseModalBtn onClick={handleCloseModal}>
          &times;
        </CloseModalBtn>
        <DetailTitle>Scientific Name: {data.plantsMoreInfo.scientific_name}</DetailTitle>
        
        <DetailContentContainer>
          <Item>Sunlight: {data.plantsMoreInfo.sunlight}</Item>
          <Item>Water: {data.plantsMoreInfo.watering}</Item>
          <Item>
            Posionous to Pets: {data.plantsMoreInfo.poisonous_to_pets ? "Yes" : "No"}
          </Item>
          <Item>Care level: {data.plantsMoreInfo.care_level}</Item>
          <Item>Description: {data.plantsMoreInfo.description}</Item>
        </DetailContentContainer>
        
      </DetailCardContainer>
    </>
  )
};

export default ResultsDetailCard;