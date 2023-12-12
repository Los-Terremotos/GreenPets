// import React from 'react';
import assets from './assets/plantsInHouse.jpg';
import leaf from './assets/herbal-spa-treatment-leaves.png'
import graph from './assets/graph.jpg';
import lineGraph from './assets/line-graph.jpg'
import search from './assets/search.jpg'
import Navbar from './Navbar'
// import indexStyles from './index.module.css'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Global } from '@emotion/react';

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
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
`
// const Body = styled.body`
// margin: 0;
// display: flex;
// place-items: center;
// min-width: 320px;
// min-height: 150vh;
// overflow-x: hidden;
// `
const UpperContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 50%;
position: absolute;
top: 45px;
background-color: #FFE8D6;

@media (max-width: 900px) {
    display: flex;
    padding-bottom: 80px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
`

const UpperContainerImg = styled.img`
width: 600px;
height: 100%;
padding-top: 8px;
border-radius: 10%;
padding-left: 10px;

@media (max-width: 900px) {
  padding-top: 30px;
  border-radius: 0;
  width: 80%;
}
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
`
const LeafImg = styled.img`
max-width: 100%;
height: 40px;

@media (max-width: 900px) {
  display: none;
}
}
`

const MiddleContainer = styled.div`
display: center;
position: absolute;
width: 100%;
align-items: center;
bottom: 30%;
text-align: center;

p{
  color: #fff;
  font-weight: 500;
}

@media (max-width: 900px) {
padding-top: 100px;
}
`
const Mdh1 = styled.h1`
background-color: #fff;
display: inline-block;
color: #A5A58D;
padding: 10px 30px;
`

const FlexEndContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
position: absolute;
bottom:auto;
height: auto;

@media (max-width: 900px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
}
`

const EndContainer = styled.div`
flex: 1; 
text-align: center; 
padding: 10px; 
height: 100%;
`

const FeatContainerImg = styled.img`
width: 100%;
height: auto;
border-radius: 10%;
@media (max-width: 900px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: auto;
}
`


function HomePage() {

  return (
    <>
      <GlobalStyle />
        {/* Moved to its own component
  <header id='header'>
  <nav id= 'nav-bar'>
    <ul>
      <li><a href='/get-started'>Get Started</a></li>
      <li><a href='/road-map'>Roadmap</a></li>
      <li><a href=''>Contributors</a></li>
      <MenuIcon />
    </ul>
  </nav>
</header> */}
        <Navbar />
        <UpperContainer>
          <div>
            <UpperContainerImg src={assets} alt="Upper Container Image" />
          </div>
          <TextContainer>
            <LeafImg src={leaf} alt="Leaf Icon" />
            <h1>Your Text Here</h1>
          </TextContainer>
        </UpperContainer>

        <MiddleContainer>
          <Mdh1>What is Green Pets</Mdh1>
          <p>Seamlessly find the perfect houseplants tailored to your local environment with our geolocation-based search feature.</p>
        </MiddleContainer>

        <FlexEndContainer>
          <EndContainer>
            <FeatContainerImg src={search} />
            <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
          </EndContainer>
          <EndContainer>
            <FeatContainerImg src={graph} />
            <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
          </EndContainer>
          <EndContainer>
            <FeatContainerImg src={lineGraph} />
            <p>EXAMPLE TEXT Receive timely and relevant updates with our smart notification feature. Stay informed about important events, changes, and personalized recommendations, ensuring you never miss a beat.</p>
          </EndContainer>
        </FlexEndContainer>
    </>
  )
}

export default HomePage
