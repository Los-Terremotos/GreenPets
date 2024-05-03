import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import assets from "../../assets/plantsInHouse.jpg";
import { GeneralSectionContainer } from "../../styles";
import { useSelector } from "react-redux";
import { RootState } from "../../App/store";
import { GPicon, GPicon2 } from "../../assets/index";

const HeroSectionContainer = styled(GeneralSectionContainer)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.primary1.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  display: flex;

  @media (max-width: 768px){
    display: flex;
    height: auto;
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

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  color: ${(props) => props.theme.secondary1.color};
  transition: ${(props) => props.theme.transitions.color};
  padding: 85px;
  width: 21%;

  @media(max-width: 768px){
    width: 100%;
    height: auto;
    padding: 0;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 10px;
  }

  h3 {
    text-align: center;
    font-size: 1.375rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroSectionImgContainer = styled.div`
  overflow: hidden;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: ceter;

  @media (max-width: 768px){
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
`;

const GetStartedBtn = styled(Link)`
  display: block;
  height: 40px;
  width: 100%;
  max-width: 200px;
  min-width: 180px;
  background-color: ${(props) => props.theme.primary2.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 15px;
  color: #ffe8d6;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5em;
  color: ${(props) => props.theme.secondary2.color};
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.secondary1.color};
    color: ${(props) => props.theme.primary1.color};
  }
`;

const HeroSection: React.FC = () => {
  const themeState = useSelector(
    (state: RootState) => state.lightModeToggle.lightMode
  );

  return (
    <HeroSectionContainer>
      <Wrapper>
        <TextContainer>
          <TextWrapper>
            <LeafImg src={themeState ? GPicon : GPicon2} alt="Leaf Icon" />
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