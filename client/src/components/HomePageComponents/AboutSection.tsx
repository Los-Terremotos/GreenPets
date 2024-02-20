import React from "react";
import styled from "styled-components";
import { GeneralSectionContainer } from "../../styles";
import leaf from "../../assets/herbal-spa-treatment-leaves.png";


const AboutSectionContainer = styled(GeneralSectionContainer)`
  text-align: center;
  padding: 40px 0;
  font-family: "trebuchet ms", sans-serif;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://wallpapers.com/images/hd/aesthetic-leaf-background-jq4u2u8ykxbuni8o.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.13;
    z-index: -1;
  }
`;

const AboutTitles = styled.h1`
  font-size: 4.5rem;
  color: ${props => props.theme.secondary1.color};
  background-color: ${props => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 0.5em;
  transition: background-color 0.5s ease, color 0.5s ease;
`;

const AboutSubtitle = styled.h2`
  font-size: 3rem;
  color: #2a5938;
  margin-bottom: 1.5em;
`;

const AboutBody = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: #404337;
  max-width: 850px;
  margin: 0 auto 2em;
`;

const LeafStyle = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1.5em;
`;



const AboutSection: React.FC = () => {
  return (
    <>
      <AboutSectionContainer>
        <AboutTitles>About Us</AboutTitles>
        <AboutSubtitle>Your Gateway to the World of Plants</AboutSubtitle>
        <LeafStyle src={leaf} />
        <br />
        <AboutBody>
          GREENPETS ISN'T JUST AN APPLICATION - <br />
          IT'S A JOURNEY TOWARDS GREENER
          LIVING.
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
