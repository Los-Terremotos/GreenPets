//import React from 'react'
//import MenuIcon from '@mui/icons-material/Menu';
//import { IoLeaf } from "react-icons/io5";
// import roadmapStyle from "./roadmap.module.css";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import Navbar from "../Navbar";
import { createGlobalStyle } from "styled-components";
import { phoneImg, favoriteImg, registerImg, testingImg } from "../../assets";


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 50px 20px;
  align-items: center;
  background-color: ${props => props.theme.primary1.color};
  transition: ${props => props.theme.transitions.backgroundColor}
  justify-content: space-evenly;

  h1 {
    font-size: 4rem;
    color: ${props => props.theme.primary1.color};
    background-color: ${props => props.theme.secondary1.color};
    padding: 10px 30px;
    border-radius: 10px;
    transition: background-color 0.5s ease, color 0.5s ease;
  }

  @media (max-width: 960px) {
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }

`

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 10px; 
width: 100%;

h3{
  margin-bottom: 20px;
  margin-top: 15px;
  font-size: 25px;
  color: ${props => props.theme.secondary2.color};
}

p{
  font-size: 17px;
  color: ${props => props.theme.secondary1.color};
}
`

const ProdImg = styled.img`
width: 100%;
border-radius: 15px;
object-fit: cover;
height: 400px;
`

const RoadmapCardCont = styled.div`
  display: flex;
  color: #333232;  // floralwhite?
`;


const Roadmap = () => {
  return (
      <Container>
        <GlobalStyle />
          <h1>Roadmap</h1>
        <RoadmapCardCont>
        <ImgContainer>
          <ProdImg src={registerImg} />
          <h3>Enhanced Interaction</h3>
          <p>In the upcoming phases of our project, we're introducing user registration functionality. This will empower you to create a personalized account, allowing seamless logins and providing a dedicated space to effortlessly manage and monitor the well-being of your plants.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={favoriteImg} />
          <h3>Personalized Plant Library</h3>
          <p>Anticipate the ability to curate your own botanical haven! Soon, you'll be able to save and organize your favorite plants within the app. This feature ensures easy access to vital care information and fascinating facts about each plant you hold dear.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={testingImg} />
          <h3>Ensuring Reliability</h3>
          <p>Stepping up our commitment to delivering a robust application, we're in the process of implementing comprehensive unit and integration testing. This meticulous testing approach ensures that every feature functions seamlessly, providing you with a reliable and enjoyable experience.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={phoneImg} />
          <h3>Responsive Accessibility</h3>
          <p>We're actively developing a responsive design to make your plant care experience truly mobile-friendly. Regardless of the device you use, the application will adapt effortlessly, ensuring that all your favorite plants and their care details are just a tap away. Enjoy the convenience of plant care, anytime, anywhere!</p>
        </ImgContainer>
        </RoadmapCardCont>
      </Container>
  );
};

export default Roadmap;
