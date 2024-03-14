import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import assets from '../../assets/plantsInHouse.jpg';
import leaf from '../../assets/herbal-spa-treatment-leaves.png';
import { GeneralSectionContainer } from '../../styles';
// '../../assets/plantsInHouse.jpg'
// '../../assets/plantsInHouse.jpg'

const HeroSectionContainer = styled(GeneralSectionContainer)`
  width: 100%;
  height: 100vh;
  //top: 45px;
  background-color: ${props => props.theme.primary1.color};
  transition: ${props => props.theme.transitions.backgroundColor};

  @media (max-width: 900px) {
      display: flex;
      padding-bottom: 80px;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  color: ${props => props.theme.secondary1.color};
  transition: ${props => props.theme.transitions.color};
  padding: 15px;

  h1{
    font-size: 60px;
    font-weight: 500;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 2px solid limegreen;
  padding: 10px;
`;

const HeroSectionImgContainer = styled.div`
  width: 75%;
  height: 80%;
  padding-top: 8px;
  padding-left: 10px;

  @media (max-width: 900px) {
    padding-top: 30px;
    border-radius: 0;
    width: 80%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const LeafImg = styled.img`
  max-width: 100%;
  height: 40px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const GetStartedBtn = styled(Link)`
  display: block;
  height: 40px;
  width: 180px;
  background-color: ${props => props.theme.primary2.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 15px;
  color: #ffe8d6;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em;
  color: ${props => props.theme.secondary2.color};
  text-align: center; /* Horizontal centering */
  line-height: 40px; /* Vertical centering */

  &:hover {
    background-color: ${props => props.theme.secondary1.color};
    color: ${props => props.theme.primary1.color};
  }
`;
const HeroSection: React.FC = () => {


  return (
    <HeroSectionContainer>
      <Wrapper>
        <TextContainer>
          <TextWrapper>
            <LeafImg src={leaf} alt="Leaf Icon" />
            <h1>Welcome to Green Pets</h1>
            <h3>Discover Your Perfect Plant Companion with GreenPets</h3>
            <br/>
            <br/>
            <GetStartedBtn to = "/get-started">Find your pet now!</GetStartedBtn>
          </TextWrapper>
          
        </TextContainer>

        <HeroSectionImgContainer>
          <Image src={assets} alt="Hero Section Image"/>
        </HeroSectionImgContainer>
      </Wrapper>
    </HeroSectionContainer>
  )
};


export default HeroSection;