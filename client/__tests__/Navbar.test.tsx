//import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import store from '../src/App/store';
import { configureStore } from "@reduxjs/toolkit";
import userEvent from '@testing-library/user-event';
import lightModeReducer from "../src/Features/Navbar/lightModeSlice";
import navbarReducer from "../src/Features/Navbar/navbarSlice";

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
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Roadmap/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Get Started/i)).toBeInTheDocument();
    expect(screen.getByText(/Surprise?/i)).toBeInTheDocument();
  });

  // Navbar visibility toggles based on scroll position
  test('Navbar visibility toggles based on scroll position', () => {
    // Create a store with initialState
    const store = configureStore({
      reducer: {
        isNavbarVisible: navbarReducer,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // With `isNavbarVisible` initially true, "About Us" should be visible
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  // Test user click on "Surprise?" button
  test('Theme toggle click dispatches setLightMode action', async () => {
    const store = configureStore({
      reducer: {
        isNavbarVisible: navbarReducer,
        lightModeToggle: lightModeReducer,
      },
      // Set any required initial state here
    });

    // Spy on the store's dispatch method
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Assert intial state before action
    expect(store.getState().lightModeToggle.lightMode).toBe(false);

    // Simulate user clicking the "Surprise?" button
    await userEvent.click(screen.getByText(/Surprise?/i));

    // Check if the `setLightMode` action was dispatched
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'lightModeTheme/setLightMode', // Use the exact action type your application uses
    });
    
    // Assert state after dispatch to verify it has changed as expected
    expect(store.getState().lightModeToggle.lightMode).toBe(true);

    // Clean up
    dispatchSpy.mockRestore();
  });


  // Test user click on 'Get Started' will reroute user to /get-started page
  // Create dedicated component to make process of capturing and asserting on the route more explicit and clear
  const TestLocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="test-location" data-location={location.pathname} />;
  }
  
  test("Clicking 'Get Started' button redirects to /get-started page", async () =>{
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="*" element={<TestLocationDisplay />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    // Simulate user click on "Get Started" button
    await userEvent.click(screen.getByText(/Get Started/i));

    // Check that the URL has changed to /get-started
    expect(screen.getByTestId('test-location').getAttribute('data-location')).toBe('/get-started');
  });

});