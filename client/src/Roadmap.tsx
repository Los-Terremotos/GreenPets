import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IoLeaf } from "react-icons/io5";
// import roadmapStyle from "./roadmap.module.css";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  :root{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #A5A58D;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
  margin: 0;
  padding: 0;
}

body{
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 150vh;
  overflow-x: hidden;
}
`
const RdContainer = styled.section`
margin-top: -200px;
display: flex;
position: absolute;
flex-direction: column;
width: 100%;
align-items: center;

h1{
  font-size: 40px;
  background-color: #FFFFFF;
  color: #404337;
  padding: 15px 65px;
}
`
const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: absolute;
  margin-left: 20px;
  margin-right: 20px;
`

const ImgContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 10px; 
`

const ProdImg = styled.img`
width: 280px;
height: 350px;
`

const Roadmap = () => {
 

  return (
    <>
    <GlobalStyle/>
    <Navbar />
<RdContainer>
  <h1>Roadmap</h1>
  <Link to="/get-started" className="btn-primary">Get Started</Link>
</RdContainer>


      <Container>
  <ImgContainer>
    <ProdImg src={''} />
    <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
  </ImgContainer>
  <ImgContainer>
    <ProdImg src={''} />
    <p>EXAMPLE TEXT Experience effortless integration with our seamless feature that allows you to connect and synchronize across multiple platforms. Enjoy a unified and cohesive user experience as you navigate through various functionalities with ease.</p>
    </ImgContainer>
    <ImgContainer>
    <ProdImg src={''} />
    <p>EXAMPLE TEXT Uncover information swiftly with our intelligent search feature. Harness the power of advanced algorithms to retrieve accurate and tailored results, making your search experience faster, more precise, and tailored to your needs.</p>
    </ImgContainer>
</Container>
    </>
  )
}

export default Roadmap
