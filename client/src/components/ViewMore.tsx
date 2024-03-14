import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import styled from "styled-components";
import ResultsDetailCard from "./ResultsDetailCard";
import { PlantInfo } from "../../types";
import { useDispatch } from 'react-redux';
import { openDetailCard } from "../Features/DetailsCard/cardSlice";

const ViewMoreBtn = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: white;
  color: #7e7e63;
  &:hover {
    background-color: #7e7e63;
    cursor: pointer;
    color: white;
  }
`;

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
  const dispatch = useDispatch();
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  //const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null);

  const [getPlantInfo, { called, loading, error, data }] = useLazyQuery<{
    plantsMoreInfo: PlantInfo;
  }>(MORE_INFO, {
    variables: {
      plantsMoreInfoId: plantId,
    },
    onCompleted: (data) => {
      console.log(`Query completed successfully: ${JSON.stringify(data)}`);
    },
    onError: (error) => {
      console.error(`Query failed, line 77 with error: ${error}`);
    },
  });

  const handleMoreInfoClick = () => {
    if (!showMoreInfo && !called) {
      console.log(`Hello before query for plan, LINE 84 in ViewMore`);
      getPlantInfo();
    }
    setShowMoreInfo(!showMoreInfo);

    if (data) {
      dispatch(openDetailCard(data.plantsMoreInfo));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <ViewMoreBtn onClick={handleMoreInfoClick}>
        {showMoreInfo ? "Hide Info" : "More Info"}
      </ViewMoreBtn>
      {showMoreInfo && data && (
        <ResultsDetailCard data={data} />
      )}
    </>
  );
};

export default ViewMore;

// const Item = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   background: white;
//   width: auto;
//   text-wrap: wrap;
//   min-height: 50px;
//   color: #7e7e63;
//   border-radius: 4px;
//   box-shadow: 1px 1px 4px black;
// `;

// <div>
  //   <Item>Scientific Name: {data.plantsMoreInfo.scientific_name}</Item>
  //   <Item>Sunlight: {data.plantsMoreInfo.sunlight}</Item>
  //   <Item>Water: {data.plantsMoreInfo.watering}</Item>
  //   <Item>
  //     Posionous to Pets: {data.plantsMoreInfo.poisonous_to_pets}
  //   </Item>
  //   <Item>Indoor: {data.plantsMoreInfo.indoor}</Item>
  //   <Item>Care level: {data.plantsMoreInfo.care_level}</Item>
  //   <Item>Description: {data.plantsMoreInfo.description}</Item>
// </div>