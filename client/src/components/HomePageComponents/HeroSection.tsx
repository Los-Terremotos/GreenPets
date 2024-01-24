import React from 'react';
import styled from 'styled-components';
import assets from '../../assets/plantsInHouse.jpg';
import leaf from '../../assets/herbal-spa-treatment-leaves.png'
import { GeneralSectionContainer } from '../../styles';


const HeroSectionContainer = styled(GeneralSectionContainer)`
  flex-direction: row;
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

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  color: #7E7E63;
  height: 80%;

  h1{
    font-size: 60px;
    font-weight: 500;
  }
`

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
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
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
      <Wrapper>
        <TextContainer>
          <LeafImg src={leaf} alt="Leaf Icon" />
          <h1>Welcome to Green Pets</h1>
          <h2>Discover Your Perfect Plant Companion with GreenPets</h2>
          <br/>
          <br/>
          <p>GreenPets is more than just an app; it's your gateway to the world of plants. Our mission is to connect people with the perfect plant companions, making plant care accessible, enjoyable, and sustainable. Whether you're a seasoned plant parent or just starting out, GreenPets guides you through every step, ensuring a greener, happier space. Join our community of green enthusiasts and embark on a journey where every plant tells a story.</p>
        </TextContainer>

        <HeroSectionImgContainer>
          <Image src={assets} alt="Hero Section Image"/>
        </HeroSectionImgContainer>
      </Wrapper>
    </HeroSectionContainer>
  )
};


export default HeroSection;