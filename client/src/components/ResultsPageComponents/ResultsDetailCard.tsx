import React from 'react';
import styled from 'styled-components';
import { PlantInfo } from "../../../types";
import { useDispatch } from 'react-redux';
import { closeModal } from '../../Features/modal/modalSlice';
import ContentTabs from './ContentTabs';
import { formatTitles } from '../../utils/formatTitles';

interface ResultsDetailCardProps {
  data: {
    plantsMoreInfo: PlantInfo;
  }
}


const DetailCardContainer = styled.div`
  //border: 2px solid purple;
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background-color: #EEF0E5; // light smoke grey. Distinguished bg color so content has its own container
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const CloseModalBtn = styled.button`
  display: flex;
  margin-left: auto;
  //margin-right: 20px;
  border: none;
  border-radius: 5px;
  font-size: 25px;
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
  //border: 2px solid pink;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem 2rem;
  padding: 0 2rem;
  box-shadow: 1px 1px 4px black;
  background-color: floralwhite; // to match bg color of testimonial cards
  color: #304D30; // dark forest green to match title color
  border-radius: 10px;
  overflow-y: auto;
  height: 100%;
  width: 90%;
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
        <DetailTitle>Pet name: {formatTitles(data.plantsMoreInfo.common_name)}</DetailTitle>
        
        <DetailContentContainer>
          <ContentTabs />
        </DetailContentContainer>
        
      </DetailCardContainer>
    </>
  )
};

export default ResultsDetailCard;


// const Item = styled.li`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   width: fit-content;
//   text-wrap: wrap;
//   min-height: 50px;
//   color: #304D30;
//   border: 2px solid red;
// `;

{/* 
  <Item>Sunlight: {data.plantsMoreInfo.sunlight}</Item>
  <Item>Water: {data.plantsMoreInfo.watering}</Item>
  <Item>
    Posionous to Pets: {data.plantsMoreInfo.poisonous_to_pets ? "Yes" : "No"}
  </Item>
  <Item>Care level: {data.plantsMoreInfo.care_level}</Item>
  <Item>Description: {data.plantsMoreInfo.description}</Item> 
*/}