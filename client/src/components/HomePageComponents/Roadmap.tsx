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

// const RdContainer = styled.section`
//   margin-top: -200px;
//   display: flex;
//   position: absolute;
//   flex-direction: column;
//   width: 100%;
//   align-items: center;

 
// `;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  // padding-left: 20px;
  // padding-right: 20px;
  padding: 50px 20px;
  align-items: center;
  background-color: ${props => props.theme.primary1.color};
  transition: ${props => props.theme.transitions.backgroundColor}
  justify-content: space-evenly;

  h1 {
    font-size: 3rem;
    color: ${props => props.theme.primary1.color};
    background-color: ${props => props.theme.secondary1.color};
    padding: 10px 30px;
    border-radius: 10px;
    transition: background-color 0.5s ease, color 0.5s ease;
  }
`

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 10px; 
width: 25%;

h3{
  margin-bottom: 20px;
  margin-top: 15px;
  font-size: 25px;
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
          <h3>User Registration</h3>
          <p>In later interation of this project you will be able to register as a user as well as login so that you can keep track of your plants.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={favoriteImg} />
          <h3>Save Your Favorite Plant</h3>
          <p>Soon you will be able to save your favorite plants so that you can easily refer to how to take care of them or look up facts about that plant.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={testingImg} />
          <h3>Unit and Integration Testing</h3>
          <p>Will soon implement integration and unit testing for our application to ensure our functionalities are working as intended.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={phoneImg} />
          <h3>Mobile Friendly</h3>
          <p>Currently working on responsive design so that no matter what device you are on, you will be able to have access to all of your favorite plants!</p>
        </ImgContainer>
        </RoadmapCardCont>
      </Container>
  );
};

export default Roadmap;
