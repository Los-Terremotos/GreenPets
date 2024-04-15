/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import HomePage from "../src/pages/HomePage";
import store from "../src/App/store";
//import { jest } from '@jest/globals';

// Mock child components to simplify testing
jest.mock(
  '../src/components/Navbar', 
  () => () => <div>Navbar</div>
);
jest.mock(
  '../src/components/HomePageSections/HeroSection', 
  () => () => <div>HeroSection</div>
);
jest.mock(
  '../src/components/HomePageSections/AboutSection', 
  () => () => <div>AboutSection</div>
);
jest.mock(
  '../src/components/HomePageSections/FeaturesSection', 
() => () => <div>FeaturesSection</div>
);
jest.mock(
  '../src/components/HomePageSections/SliderSection', 
() => () => <div>SliderSection</div>
);
jest.mock(
  '../src/components/HomePageSections/ReviewSection', (
  
) => () => <div>ReviewSection</div>
);
jest.mock(
  '../src/components/HomePageSections/CallToActionSection', 
() => () => <div>CallToActionSection</div>
);
jest.mock(
  '../src/components/HomePageSections/ContributionSection', 
() => () => <div>ContributionSection</div>
);
jest.mock(
  '../src/components/HomePageSections/FooterSection', 
() => () => <div>FooterSection</div>
);

// Initial tests:
describe('Testing HomePage and its components', () => {

  // first test block start
  test('renders all sections of the HomePage', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Test if Navbar and HeroSection are in the document
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('HeroSection')).toBeInTheDocument();
    expect(screen.getByText('AboutSection')).toBeInTheDocument();
    expect(screen.getByText('FeaturesSection')).toBeInTheDocument();
    expect(screen.getByText('SliderSection')).toBeInTheDocument();
    expect(screen.getByText('ReviewSection')).toBeInTheDocument();
    expect(screen.getByText('CallToActionSection')).toBeInTheDocument();
    expect(screen.getByText('ContributionSection')).toBeInTheDocument();
    expect(screen.getByText('FooterSection')).toBeInTheDocument();
  });

  // can add additional "test" blocks starting here

// end of initial describe test block  
});