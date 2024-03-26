import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import styled from "styled-components";
import {  DarkGreyGreen, LightGreyGreen,  } from '../../themes';
//import ResultsDetailCard from "./ResultsDetailCard";
import { PlantInfo } from "../../../types";
import { useDispatch } from 'react-redux';
import { openDetailCard } from "../../Features/DetailsCard/cardSlice";
import { openModal } from "../../Features/modal/modalSlice";

const ViewMoreBtn = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  background-color: floralwhite;
  border: none;
  color: ${DarkGreyGreen.primary1.color};
  &:hover {
    background-color: ${DarkGreyGreen.primary2.color};
    cursor: pointer;
    color: floralwhite;
  }
`;

// interface PlantInfo {
//   id: string;
//   scientific_name: string;
//   sunlight: string;
//   watering: string;
//   poisonous_to_pets: string;
//   indoor: string;
//   care_level: string;
//   description: string;
// }

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
  
  const [getPlantInfo, { called, loading, error, data }] = useLazyQuery<{
    plantsMoreInfo: PlantInfo;
  }>(MORE_INFO, {
    variables: {
      plantsMoreInfoId: plantId,
    },
    onCompleted: (data) => {
      console.log(`Query completed successfully: ${JSON.stringify(data)}`);
      dispatch(openModal());
      dispatch(openDetailCard(data.plantsMoreInfo));
    },
    onError: (error) => {
      console.error(`Query failed, line 77 with error: ${error}`);
    },
  });

  const handleMoreInfoClick = () => {
    // condition to check if query has been ran or not
    if (!called) {
      console.log(`Hello before query for plant, LINE 84 in ViewMore`);
      getPlantInfo();
    }
  
    if (data) {
      dispatch(openModal());
      dispatch(openDetailCard(data.plantsMoreInfo));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <ViewMoreBtn onClick={handleMoreInfoClick}>
        More Info
      </ViewMoreBtn>
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