import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import assets from "../../assets/plantsInHouse.jpg";
import icon from "../../assets/icon.png";
import { GeneralSectionContainer } from "../../styles";

const HeroSectionContainer = styled(GeneralSectionContainer)`
  border: 2px solid yellow;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.primary1.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  display: flex;
  //justify-content: space-between;

  @media (max-width: 900px) {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  border: 2px solid red;
  color: ${(props) => props.theme.secondary1.color};
  transition: ${(props) => props.theme.transitions.color};
  padding: 85px;
  width: 15%;

  @media (max-width: 900px) {
    //flex: 1;
    padding: 20px;
    //height: 100vh;
    //flex-basis: 100%;
  }

  h1 {
    font-size: 60px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 10px;
  }

  h3 {
    text-align: center;
    font-size: 22px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroSectionImgContainer = styled.div`
  border: 2px solid blue;
  overflow: hidden;
  height: 100%;
  justify-content: center;
  align-items: ceter;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  //border-radius: 10px;
`;

const LeafImg = styled.img`
  max-width: 100%;
  height: 80px;
  margin-top: 85px;

  // @media (max-width: 900px) {
  //   display: none;
  // }
`;

const GetStartedBtn = styled(Link)`
  display: block;
  height: 40px;
  width: 180px;
  background-color: ${(props) => props.theme.primary2.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 15px;
  color: #ffe8d6;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em;
  color: ${(props) => props.theme.secondary2.color};
  text-align: center; /* Horizontal centering */
  line-height: 40px; /* Vertical centering */
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.secondary1.color};
    color: ${(props) => props.theme.primary1.color};
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroSectionContainer>
      <Wrapper>
        <TextContainer>
          <TextWrapper>
            <LeafImg src={icon} alt="Leaf Icon" />
            <h1>GreenPets</h1>
            <h3>
              <i>
                Greener Living, <br />
                One Tap Away
              </i>
            </h3>
            <br />
            <br />
            <GetStartedBtn to="/get-started">Find your pet now!</GetStartedBtn>
          </TextWrapper>
        </TextContainer>

        <HeroSectionImgContainer>
          <Image src={assets} alt="Hero Section Image" />
        </HeroSectionImgContainer>
      </Wrapper>
    </HeroSectionContainer>
  );
};

export default HeroSection;
