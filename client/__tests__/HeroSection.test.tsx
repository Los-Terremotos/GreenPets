import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import store from '../src/App/store';
import HeroSection from '../src/components/HomePageSections/HeroSection';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { DarkGreyGreen } from '../src/themes'; // , LightGreyGreen 

describe('Testing HeroSection and its contents', () => {

  test('Hero Section has all proper text content', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={DarkGreyGreen}>
            <HeroSection />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );

    // check the component for the Hero section text
    expect(screen.getByText('Green Pets')).toBeInTheDocument();
    expect(screen.getByText(/Greener Living, One Tap Away/i)).toBeInTheDocument();
    // ^ This utilizes RegEx to avoid having to deal with the "link break" HTML tag
  });

  // test to see if clicking on "Find your pet now!" will reroute user to new page
  // Created dedicated component to make the processing of capturing and asserting on the route more explicit and clear
  const TestLocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="test-location" data-location={location.pathname} />;
  }
  test('Test if clicking on "Find your pet now!" button will reroute user to /get-started page', async () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <ThemeProvider theme={DarkGreyGreen}>
            <Routes>
              <Route path='/' element={<HeroSection />} />
              <Route path='/get-started' element={<TestLocationDisplay />} />
            </Routes>
          </ThemeProvider>
        </MemoryRouter>
      </Provider>
    );


    // Simulate the user clicking on the button
    await userEvent.click(screen.getByText(/Find your pet now!/i));

    // Cehck that the URL has changed to /get-started
    expect(screen.getByTestId('test-location').getAttribute('data-location')).toBe('/get-started');
  
  })
});