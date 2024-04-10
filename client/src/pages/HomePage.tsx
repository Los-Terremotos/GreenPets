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
// import Root state for theme toggle
import { RootState } from '../App/store';
import { useSelector } from 'react-redux';
import MobileNavbar from '../components/NavbarComponents/MobileNavbar';


const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePage: React.FC = () => {

  const themeState = useSelector((state : RootState) => state.lightModeToggle.lightMode);

  return (
      <ThemeProvider theme={themeState ? LightGreyGreen : DarkGreyGreen}>

        <HomePageContainer>
          <Navbar />
          {/* <MobileNavbar /> */}

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
  )
}

export default HomePage;