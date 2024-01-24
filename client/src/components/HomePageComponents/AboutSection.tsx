import React from "react";
import styled from 'styled-components';
import { GeneralSectionContainer } from "../../styles";

const AboutSectionContainer = styled(GeneralSectionContainer)`
  background-color: #75472F;
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

  color: white;
`

const AboutSection: React.FC = () => {


  return (
    <>
      <AboutSectionContainer>
        <TextContainer>
          <h1>What is Green Pets?</h1>
          <p>GreenPets is more than just an app; it's your gateway to the world of plants. Our mission is to connect people with the perfect plant companions, making plant care accessible, enjoyable, and sustainable. Whether you're a seasoned plant parent or just starting out, GreenPets guides you through every step, ensuring a greener, happier space. Join our community of green enthusiasts and embark on a journey where every plant tells a story.</p>
          <br/>
          <br/>
          <h1>Our Mission</h1>
          <p>We want to make your plant discovery journey one to remember!</p>
        </TextContainer>
      </AboutSectionContainer>
      
    </>
  )
};

export default AboutSection;