import React from 'react';
import Navbar from '../components/Navbar'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import HeroSection from '../components/HomePageComponents/HeroSection';
import AboutSection from '../components/HomePageComponents/AboutSection';
import FeaturesSection from '../components/HomePageComponents/FeaturesSection';
import SliderSection from '../components/HomePageComponents/SliderSection';
import TestimonialSection from '../components/HomePageComponents/TestimonialsSection';
import CallToActionSection from '../components/HomePageComponents/CallToActionSection';
import FooterSection from '../components/HomePageComponents/FooterSection';


// global style specific to this component
// Changed variable name to home page container
const GlobalStyle = styled.div`
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
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: React.FC = () => {


  return (
    <>
      <GlobalStyle />

      <HomePageContainer>

        <Navbar />
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <SliderSection />
        <TestimonialSection />
        <CallToActionSection />
        <FooterSection />

      </HomePageContainer>
    </>
    
  )
}

export default HomePage;