import React from 'react';
import styled from 'styled-components';
import assets from '../../assets/plantsInHouse.jpg';
import leaf from '../../assets/herbal-spa-treatment-leaves.png'
import { GeneralSectionContainer } from '../../styles';


const HeroSectionContainer = styled(GeneralSectionContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 45px;
  background-color: #FFE8D6;

  @media (max-width: 900px) {
      display: flex;
      padding-bottom: 80px;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;
  }
`

const HeroSectionContainerImg = styled.img`
  width: 600px;
  height: 100%;
  padding-top: 8px;
  border-radius: 10%;
  padding-left: 10px;

  @media (max-width: 900px) {
    padding-top: 30px;
    border-radius: 0;
    width: 80%;
  }
`
const TextContainer = styled.div`
  flex: 1;
  text-align: center; 
  margin-right: 20%;

  h1{
    font-size: 40px;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    display: none;
  }

  color: #7E7E63;

`
const LeafImg = styled.img`
  max-width: 100%;
  height: 40px;

  @media (max-width: 900px) {
    display: none;
  }

`

const HeroSection: React.FC = () => {


  return (
    <HeroSectionContainer>
      <div>
        <HeroSectionContainerImg src={assets} alt="Hero Section Container Image" />
      </div>
      <TextContainer>
        <LeafImg src={leaf} alt="Leaf Icon" />
        <h1>Welcome to Green Pets</h1>
        <h2>Discover Your Perfect Plant Companion with GreenPets</h2>
        <br/>
        <br/>
        <p>GreenPets is more than just an app; it's your gateway to the world of plants. Our mission is to connect people with the perfect plant companions, making plant care accessible, enjoyable, and sustainable. Whether you're a seasoned plant parent or just starting out, GreenPets guides you through every step, ensuring a greener, happier space. Join our community of green enthusiasts and embark on a journey where every plant tells a story.</p>
      </TextContainer>
    </HeroSectionContainer>
  )
};


export default HeroSection;