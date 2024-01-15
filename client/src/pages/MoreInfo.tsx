/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components'
import mockDataList1 from '../mockData/plantListData';


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
  width: 15%;
  background: #A5A58D;
  font-size: 1.2em;
  padding: 40px; 
  border-radius: 10px;
  margin: 10px;
  box-shadow: 5px 5px 10px black;
  `;
  const Image = styled.img`
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 4px black;

  `;
  const Item = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: whitesmoke;
  width: auto;
  text-wrap: wrap;
  min-height: 50px;
  color: #7E7E63;
  `;
  const ViewMoreBtn = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #75472F;
  color: white;
  &:hover {
    background-color: #CB9B7C;
    cursor: pointer;
    color: white;
  }
  `;

  interface PlantInfo {
    id: string;
    scientific_name?: string;
    sunlight?: string;
    watering?: string;
    poisonous_to_pets?: string;
    indoor?: string;
    care_level?: string;
    description?: string;
  }

  const MORE_INFO = gql`
query PlantsMoreInfo($plantsMoreInfoId: String!) {
  plantsMoreInfo(id: $plantsMoreInfoId) {
    id
    scientific_name
    sunlight
    watering
    poisonous_to_pets
    indoor
    care_level
    description
  }
}
`;


const MoreInfo: React.FC = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null);

  const { loading, error, data } = useQuery<{ plantsMoreInfo: PlantInfo }>(MORE_INFO, {
    variables: {
      plantsMoreInfoId: "10",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const handleMoreInfoClick = () => {
    setShowMoreInfo(true);
    setPlantInfo(data?.plantsMoreInfo);
  };

  return (
    <>
    {console.log("graphQL data-->", data)}
      <ViewMoreBtn onClick={handleMoreInfoClick}>More Info</ViewMoreBtn>
      {showMoreInfo && plantInfo && (
        <div>
          <Item>Scientific Name: {plantInfo?.scientific_name}</Item>
          <Item>Sunlight: {plantInfo?.sunlight}</Item>
          <Item>Water: {plantInfo?.watering}</Item>
          <Item>Posionous to Pets: {plantInfo?.poisonous_to_pets}</Item>
          <Item>Indoor: {plantInfo?.indoor}</Item>
          <Item>Care level: {plantInfo?.care_level}</Item>
          <Item>Description: {plantInfo?.description}</Item>
        </div>
      )}
    </>
  );
};

export default MoreInfo



/*
<Wrapper>
{singlePlant.map((plant, index) => (
  <Card key={index}>
    <>
      <Name>{plant.common_name}</Name>
      <Image src={plant.default_image?.thumbnail} alt={plant.common_name} />
  
      {expandIndex === index && (
        <>
          <Item>Watering: {plant.watering}</Item>
          <Item>Sunlight: {plant.sunlight}</Item>
          <Item>Scientfic name: {plant.scientific_name}</Item>
          <Item>Cycle: {plant.cycle}</Item>
          
        </>
      )}
      <ViewMoreBtn onClick={() => viewMoreBtn(index)}>More info</ViewMoreBtn>
    </>
  </Card>
))}
</Wrapper>
*/
