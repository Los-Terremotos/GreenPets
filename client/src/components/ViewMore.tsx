import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

const ViewMoreBtn = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: white;
color: #7E7E63;
&:hover {
  background-color: #7E7E63;
  cursor: pointer;
  color: white;
}
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

interface PlantInfo {
  id: string;
  scientific_name: string;
  sunlight: string;
  watering: string;
  poisonous_to_pets: string;
  indoor: string;
  care_level: string;
  description: string;
}

interface ViewMoreProps {
  plantId: string; 
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

const ViewMore: React.FC<ViewMoreProps> = ({ plantId }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null);

  const { loading, error, data } = useQuery<{ plantsMoreInfo: PlantInfo }>(MORE_INFO, {
    variables: {
      plantsMoreInfoId: plantId,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
    setPlantInfo(data?.plantsMoreInfo ?? null);
  };

  return (
    <>
      <ViewMoreBtn onClick={handleMoreInfoClick}>
        {showMoreInfo ? 'Hide Info' : 'More Info'}
      </ViewMoreBtn>
      {showMoreInfo && plantInfo && (
        <div>
          <Item>Scientific Name: {plantInfo.scientific_name}</Item>
          <Item>Sunlight: {plantInfo.sunlight}</Item>
          <Item>Water: {plantInfo.watering}</Item>
          <Item>Posionous to Pets: {plantInfo.poisonous_to_pets}</Item>
          <Item>Indoor: {plantInfo.indoor}</Item>
          <Item>Care level: {plantInfo.care_level}</Item>
          <Item>Description: {plantInfo.description}</Item>
        </div>
      )}
    </>
  );
};

export default ViewMore;
