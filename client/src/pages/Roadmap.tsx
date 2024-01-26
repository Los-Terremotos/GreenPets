//import React from 'react'
//import MenuIcon from '@mui/icons-material/Menu';
//import { IoLeaf } from "react-icons/io5";
// import roadmapStyle from "./roadmap.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 150vh;
  overflow-x: hidden;
}
.btn-primary {
  margin-top: 30px;
  color: #FFF;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  }
  
  .btn-primary:hover {
      background-color: #FFE8D6;
  
  }
`
const RdContainer = styled.section`
  margin-top: -200px;
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  align-items: center;

  h1 {
    font-size: 40px;
    background-color: #ffffff;
    color: #404337;
    padding: 15px 65px;
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  // position: absolute;
  padding-left: 20px;
  padding-right: 20px;
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
}
`

const ProdImg = styled.img`
height: 350px;
width: 100%;
border-radius: 15px;

`

const Roadmap = () => {


  return (
    <>
      <GlobalStyle />
      <Navbar />
      <RdContainer>
        <h1>Roadmap</h1>
        <Link to="/get-started" className="btn-primary">Get Started</Link>
      </RdContainer>
      <Container>
        <ImgContainer>
          <ProdImg src={'../src/assets/register.jpg'} />
          <h3>User Registration</h3>
          <p>In later interation of this project you will be able to register as a user as well as login so that you can keep track of your plants.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={'../src/assets/favorite.jpg'} />
          <h3>Save Your Favorite Plant</h3>
          <p>Soon you will be able to save your favorite plants so that you can easily refer to how to take care of them or look up facts about that plant.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={'../src/assets/testing.jpg'} />
          <h3>Unit and Integration Testing</h3>
          <p>Will soon implement integration and unit testing for our application to ensure our functionalities are working as intended.</p>
        </ImgContainer>
        <ImgContainer>
          <ProdImg src={'../src/assets/phone.jpg'} />
          <h3>Mobile Friendly</h3>
          <p>Currently working on responsive design so that no matter what device you are on, you will be able to have access to all of your favorite plants!</p>
        </ImgContainer>
      </Container>
    </>
  );
};

export default Roadmap;
