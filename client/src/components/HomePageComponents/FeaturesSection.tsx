import React from 'react';
import styled from 'styled-components';
import graph from '../../assets/graph.jpg';
import lineGraph from '../../assets/line-graph.jpg'
import search from '../../assets/search.jpg'
import { GeneralSectionContainer } from '../../styles';


const FeaturesSectionContainer = styled(GeneralSectionContainer)`
  display: center;
  align-items: center;
  bottom: 30%;
  text-align: center;
  background-color: #A5A58D;

  p{
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 900px) {
  padding-top: 100px;
  }
`
const Mdh1 = styled.h1`
  font-size: 3rem;
  background-color: #fff;
  display: inline-block;
  color: #A5A58D;
  padding: 10px 30px;
  border-radius: 10px;
`

const FeaturesCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // position: absolute;
  // bottom:auto;
  height: auto;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
  }
`

const CardContainer = styled.div`
  flex: 1; 
  text-align: center; 
  padding: 10px; 
  height: 100%;
`

const FeatContainerImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10%;
  @media (max-width: 900px) {
      display: flex;
      flex: 1;
      flex-direction: column;
      width: 100%;
      height: auto;
  }
`

const FeaturesSection: React.FC = () => {


  return (
    <>
      <FeaturesSectionContainer>
        <Mdh1>Features</Mdh1>
        <p>Explore the unique features of GreenPets designed to simplify your journey into the world of plants, making every step of plant parenthood a delightful experience.</p>

        <br />
        <br />

        {/* FlexEndContainer contains the three current feature items */}
        <FeaturesCardContainer>
          <CardContainer>
            <FeatContainerImg src={search} />
            <h4>Indoor or Outdoor – Your Choice</h4>
            <p>Begin your green journey by selecting your preferred environment. Whether you're a lover of cozy indoor greens or an enthusiast for outdoor flora, GreenPets caters to your preference. Choose 'Indoor' or 'Outdoor' to get started on your plant parenting adventure.</p>
          </CardContainer>
          <CardContainer>
            <FeatContainerImg src={graph} />
            <h4>Rate Your Green Thumb</h4>
            <p>How experienced are you with plant care? At GreenPets, we understand that everyone's journey is unique. Rate your 'Green Thumb' from beginner to expert. This helps us tailor plant suggestions just for you, ensuring your green buddies thrive under your care.</p>
          </CardContainer>
          <CardContainer>
            <FeatContainerImg src={lineGraph} />
            <h4>Explore and Learn</h4>
            <p>Once we know your space and skill level, it's time to explore! GreenPets presents you with a curated list of plants suited to your environment and expertise. Delve into detailed care guides, watering schedules, and tips for each plant. Your journey to becoming a plant expert starts here!</p>
          </CardContainer>
        </FeaturesCardContainer>
      </FeaturesSectionContainer>
    </>
  )
};

export default FeaturesSection;