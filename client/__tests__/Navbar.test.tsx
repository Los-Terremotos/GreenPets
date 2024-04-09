//import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import store from '../src/App/store';
// import { configureStore } from "@reduxjs/toolkit";
// import userEvent from '@testing-library/user-event';
// import lightModeSlice from "../src/Features/Navbar/lightModeSlice";
// import navbarSlice from "../src/Features/Navbar/navbarSlice";

describe('Testing Navbar and its contents', () => {

  test('Navbar renders with all expected buttons', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    
    // Check for each list item/button by text content
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Surprise?')).toBeInTheDocument();
  });

  // Navbar visibility toggles based on scroll position
  // test('Navbar visibility toggles based on scroll position', () => {
  //   // Create a store with initialState
  //   const store = configureStore({
  //     reducer: navbarSlice,
  //   });

  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Navbar />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   // With `isNavbarVisible` initially true, "About Us" should be visible
  //   expect(screen.getByText('About Us')).toBeInTheDocument();
  // });

  // Test user click on "Surprise?" button
  // test('Theme toggle click dispatches setLightMode action', async () => {
  //   const store = configureStore({
  //     reducer: lightModeSlice,
  //     // Set any required initial state here
  //   });

  //   // Spy on the store's dispatch method
  //   const dispatchSpy = jest.spyOn(store, 'dispatch');

  //   render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Navbar />
  //       </BrowserRouter>
  //     </Provider>
  //   );

  //   // Simulate user clicking the "Surprise?" button
  //   userEvent.click(screen.getByText('Surprise?'));

  //   // Check if the `setLightMode` action was dispatched
  //   expect(dispatchSpy).toHaveBeenCalledWith({
  //     type: 'lightMode/setLightMode', // Use the exact action type your application uses
  //   });

  //   // Clean up
  //   dispatchSpy.mockRestore();
  // });

});