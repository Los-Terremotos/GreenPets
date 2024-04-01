import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { DarkGreyGreen, LightGreyGreen } from "../../themes";
//import ResultsDetailCard from "./ResultsDetailCard";
import { PlantInfo } from "../../../types";
import { useDispatch } from "react-redux";
import { openDetailCard, setCareGuides } from "../../Features/DetailsCard/cardSlice";
import { openModal } from "../../Features/modal/modalSlice";
import { fetchCareGuides } from "../../utils/fetchCareGuides";

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

interface ViewMoreProps {
  plantId: string;
}

const MORE_INFO = gql`
  query PlantsMoreInfo($plantsMoreInfoId: String!) {
    plantsMoreInfo(id: $plantsMoreInfoId) {
      id
      common_name
      scientific_name
      other_name
      family
      origin
      dimension
      cycle
      propagation
      sunlight
      pruning_month
      maintenance
      care_guides
      growth_rate
      thorny
      invasive
      care_level
      flowers
      flower_color
      cones
      fruits
      edible_fruit
      fruit_color
      harvest_season
      leaf
      leaf_color
      edible_leaf
      cuisine
      medicinal
      poisonous_to_humans
      poisonous_to_pets
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
      dispatch(openModal());
      dispatch(openDetailCard(data.plantsMoreInfo));

      // This is where helper function extracts true care guide and sets it to a variable we're able to translate into a component;
      fetchCareGuides(data.plantsMoreInfo).then((careGuidesData) => {
        dispatch(setCareGuides(careGuidesData));
        //console.log('Care guides data updated:', careGuidesData);
      });
    },
    onError: (error) => {
      console.error(`Query failed, line 77 with error: ${error}`);
    },
  });

  async function handleMoreInfoClick() {
    // condition to check if query has been ran or not
    if (!called) {
      getPlantInfo();
    }

    if (data) {
      dispatch(openModal());
      dispatch(openDetailCard(data.plantsMoreInfo));
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <ViewMoreBtn onClick={handleMoreInfoClick}>More Info</ViewMoreBtn>
    </>
  );
};

export default ViewMore;