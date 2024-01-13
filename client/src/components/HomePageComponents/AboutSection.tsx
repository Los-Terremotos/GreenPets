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
        <h1>Hello from inside AboutSection</h1>
        <TextContainer>
          <h1>About section</h1>
        </TextContainer>
      </AboutSectionContainer>
      
    </>
  )
};

export default AboutSection;