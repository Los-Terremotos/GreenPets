import React from "react";
import { useLazyQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { PlantInfo } from "../../../types";
import { useDispatch } from "react-redux";
import {
  openDetailCard,
  setCareGuides,
} from "../../Features/DetailsCard/cardSlice";
import { openModal } from "../../Features/modal/modalSlice";
import { fetchCareGuides } from "../../utils/fetchCareGuides";

const ViewMoreBtn = styled.button`
  font-size: 1em;
  // margin: 1em;
  margin-top: 25px;
  padding: 0.25em 1em;
  height: 40px;
  width: 120px;
  background-color: ${(props) => props.theme.secondary2.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 15px;
  color: #ffe8d6;
  font-weight: 500;
  padding: 0.5em;
  color: ${(props) => props.theme.primary2.color};
  text-align: center;
  line-height: 10px;
  text-decoration: none;
  font-family: "Times New Roman", Times, serif;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.secondary1.color};
    color: ${(props) => props.theme.primary1.color};
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
