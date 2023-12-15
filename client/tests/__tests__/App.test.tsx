/* eslint-disable @typescript-eslint/no-unused-vars */
//import React from "react";
import { render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import App from '../../src/pages/App';


test('renders App component', () => {
  render(<App />);

  // Use screen.getByText to find elements by their text content
  const titleElement = screen.getByText(/Green Pets/i);
  const buttonElement = screen.getByText(/Test login here/i);
  const comingSoonElement = screen.getByText(/c o m i n g s o o n /i);

  // Assert that the elements are in the document
  expect(titleElement).toBeTruthy();
  expect(buttonElement).toBeTruthy();
  expect(comingSoonElement).toBeTruthy();
  // .toBeInTheDocument() kept giving errors. "Does not exist on type 'JestMatchers<HTMLElement>"
})

