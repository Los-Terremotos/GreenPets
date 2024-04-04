import React from 'react';
import Navbar from '../components/Navbar'
import styled, { ThemeProvider } from 'styled-components';
import HeroSection from '../components/HomePageSections/HeroSection';
import AboutSection from '../components/HomePageSections/AboutSection';
import ContributionSection from '../components/HomePageSections/ContributionSection';
import FeaturesSection from '../components/HomePageSections/FeaturesSection';
import SliderSection from '../components/HomePageSections/SliderSection';
import ReviewSection from '../components/HomePageSections/ReviewSection';
import CallToActionSection from '../components/HomePageSections/CallToActionSection';
import FooterSection from '../components/HomePageSections/FooterSection';
import { Element } from 'react-scroll';
import Roadmap from '../components/HomePageSections/Roadmap';
import {  DarkGreyGreen, LightGreyGreen,  } from '../themes';
// import {DarkNature, LightNature, DarkEarth, LightEarth, DarkRusticHarmony, LightRusticHarmony, DarkHerbalRemedy, LightHerbalRemedy,} //for testing
// import Root state for theme toggle
import { RootState } from '../App/store';
import { useSelector } from 'react-redux';


const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: React.FC = () => {

  const themeState = useSelector((state : RootState) => state.lightModeToggle.lightMode);

  return (
    <>
      {/*
        LightHerbalRemedy : DarkHerbalRemedy
        LightGreyGreen : DarkGreyGreen
        LightNature : DarkNature
        LightEarth : DarkEarth
        LightRusticHarmony : DarkRusticHarmony
      */}
      <ThemeProvider theme={themeState ? LightGreyGreen : DarkGreyGreen}>

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

          <ContributionSection />

          <Element name='contact'>
            <FooterSection />
          </Element>
          
        </HomePageContainer>

      </ThemeProvider>
      
    </>
    
  )
}

export default HomePage;

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