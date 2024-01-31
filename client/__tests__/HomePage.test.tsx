/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from "react";
import { render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import HeroSection from '../src/components/HomePageComponents/HeroSection';


test('renders HomePage component', () => {
  render(<HeroSection />);

  // Use screen.getByText to find elements by their text content
  const titleElement = screen.getByText(/Welcome to Green Pets/i);
  const buttonElement = screen.getByText(/Discover Your Perfect Plant Companion with GreenPets/i);

  // Assert that the elements are in the document
  expect(titleElement).toBeTruthy();
  expect(buttonElement).toBeTruthy();
  // .toBeInTheDocument() kept giving errors. "Does not exist on type 'JestMatchers<HTMLElement>"
})

