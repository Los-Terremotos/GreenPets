// import React from 'react';
import assets from '../assets/plantsInHouse.jpg';
import leaf from '../assets/herbal-spa-treatment-leaves.png'
import graph from '../assets/graph.jpg';
import lineGraph from '../assets/line-graph.jpg'
import search from '../assets/search.jpg'
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


// global style specific to this component
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
const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
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

  color: blue;

`
const LeafImg = styled.img`
  max-width: 100%;
  height: 40px;

  @media (max-width: 900px) {
    display: none;
  }

`

const MiddleContainer = styled.div`
  display: center;
  width: 100%;
  height: 100vh;
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

const AboutSection = styled.div`
  height: 100vh;
  width: 100%;
  background-color: purple;

`


function HomePage() {
 
  return (
    <>
      <GlobalStyle />
        <Navbar />
        <UpperContainer>
          <div>
            <UpperContainerImg src={assets} alt="Upper Container Image" />
          </div>
          <TextContainer>
            <LeafImg src={leaf} alt="Leaf Icon" />
            <h1>Welcome to Green Pets</h1>
            <h2>Discover Your Perfect Plant Companion with GreenPets</h2>
            <br/>
            <br/>
            <p>GreenPets is more than just an app; it's your gateway to the world of plants. Our mission is to connect people with the perfect plant companions, making plant care accessible, enjoyable, and sustainable. Whether you're a seasoned plant parent or just starting out, GreenPets guides you through every step, ensuring a greener, happier space. Join our community of green enthusiasts and embark on a journey where every plant tells a story.</p>
          </TextContainer>
        </UpperContainer>

        <AboutSection>
          <TextContainer>
            <h1>About section</h1>
          </TextContainer>
          
        </AboutSection>

        <MiddleContainer>
          <Mdh1>Features</Mdh1>
          <p>Explore the unique features of GreenPets designed to simplify your journey into the world of plants, making every step of plant parenthood a delightful experience.</p>
        </MiddleContainer>

        <FlexEndContainer>
          <EndContainer>
            <FeatContainerImg src={search} />
            <h4>Indoor or Outdoor – Your Choice</h4>
            <p>Begin your green journey by selecting your preferred environment. Whether you're a lover of cozy indoor greens or an enthusiast for outdoor flora, GreenPets caters to your preference. Choose 'Indoor' or 'Outdoor' to get started on your plant parenting adventure.</p>
          </EndContainer>
          <EndContainer>
            <FeatContainerImg src={graph} />
            <h4>Rate Your Green Thumb</h4>
            <p>How experienced are you with plant care? At GreenPets, we understand that everyone's journey is unique. Rate your 'Green Thumb' from beginner to expert. This helps us tailor plant suggestions just for you, ensuring your green buddies thrive under your care.</p>
          </EndContainer>
          <EndContainer>
            <FeatContainerImg src={lineGraph} />
            <h4>Explore and Learn</h4>
            <p>Once we know your space and skill level, it's time to explore! GreenPets presents you with a curated list of plants suited to your environment and expertise. Delve into detailed care guides, watering schedules, and tips for each plant. Your journey to becoming a plant expert starts here!</p>
          </EndContainer>
        </FlexEndContainer>
    </>
  )
}

export default HomePage
