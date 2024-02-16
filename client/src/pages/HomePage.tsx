import React from 'react';
import Navbar from '../components/Navbar'
import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';
import HeroSection from '../components/HomePageComponents/HeroSection';
import AboutSection from '../components/HomePageComponents/AboutSection';
import FeaturesSection from '../components/HomePageComponents/FeaturesSection';
import SliderSection from '../components/HomePageComponents/SliderSection';
import ReviewSection from '../components/HomePageComponents/ReviewSection';
import CallToActionSection from '../components/HomePageComponents/CallToActionSection';
import FooterSection from '../components/HomePageComponents/FooterSection';
import { Element } from 'react-scroll';
import Roadmap from '../components/HomePageComponents/Roadmap';

  //Previous Global styling
  // :root{
  //   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  //   line-height: 1.5;
  //   font-weight: 600;
  
  //   color-scheme: light dark;
  //   color: rgba(255, 255, 255, 0.87);
  //   background-color: #A5A58D;
  
  //   font-synthesis: none;
  //   text-rendering: optimizeLegibility;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  // }
    // * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }
 // body{
    // display: flex;
    // min-width: 320px;
    // min-height: 100vh;
    // overflow-x: hidden;
    // margin: 0;
    //}
      // @media (prefers-color-scheme: light) {
  //   color: #213547;
  //   background-color: #ffffff;
  // }
// `
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: React.FC = () => {
  // initially setting navbar to be invisible
  //const isNavbarVisible = false;
  //visible={isNavbarVisible}
  return (
    <>
      {/* <GlobalStyle /> Do not delete this until decision is made for roadmap*/}
  
      <HomePageContainer>
        <Navbar />

        <Element name='top'>
          <HeroSection />
        </Element>
        
        <Element name='about-us'>
          <AboutSection />
        </Element>

        <Element name='features'>
          <FeaturesSection />
        </Element>

        <SliderSection />

        <Element name='reviews'>
          <ReviewSection />
        </Element>

        <Element name='road-map'>
          <Roadmap />
        </Element>

        <CallToActionSection />

        <Element name='contact'>
          <FooterSection />
        </Element>
        
      </HomePageContainer>
    </>
  )
}
export default HomePage;