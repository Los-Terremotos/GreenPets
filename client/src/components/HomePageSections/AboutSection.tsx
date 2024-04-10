import React from "react";
import styled from "styled-components";
import { GeneralSectionContainer } from "../../styles";
import icon from "../../assets/icon.png";

const AboutSectionContainer = styled(GeneralSectionContainer)`
  text-align: center;
  // padding: 40px 0;
  font-family: 'Times New Roman', Times, serif;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.primary2.color};
    transition: ${props => props.theme.transitions.backgroundColor};
    z-index: -1;
  }
`;

const AboutTitles = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.secondary1.color};
  background-color: ${props => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 0.5em;
  transition: background-color 0.5s ease, color 0.5s ease;
  
  @media(max-width:425px){
    font-size:3rem;
  }
`;

const AboutSubtitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.secondary1.color};
  margin-bottom: 1.5em;

  @media (max-width: 900px) {
    font-size: 2rem;
    padding-right: 15px;
    padding-left: 15px;
    }
`;

const AboutBody = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: ${props => props.theme.secondary1.color};
  max-width: 850px;
  margin: 0 auto 2em;

  @media (max-width: 900px) {
  font-size: 1.3rem;
  padding-right: 15px;
  padding-left: 15px;
  }
`;

const LeafStyle = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5em;
`;



const AboutSection: React.FC = () => {
  return (
    <>
      <AboutSectionContainer>
        <AboutTitles>About Us</AboutTitles>
        <AboutSubtitle>Your Gateway to the World of Plants</AboutSubtitle>
        <LeafStyle src={icon} />
        <br />
        <AboutBody>
          <i>Greener Living, < br/>
          One Tap Away
          </i>
          <br />
          <br />
          Our mission is to bridge the gap between you and your perfect plant
          companions. We're dedicated to making plant care accessible,
          enjoyable, and sustainable.
          <br />
          <br />
          Whether you're a seasoned plant parent or taking your first steps into
          botany, GreenPets offers guidance at every turn. We believe in a
          future where every home is enriched with the life-giving presence of
          plants.
        </AboutBody>
      </AboutSectionContainer>
    </>
  );
};

export default AboutSection;
