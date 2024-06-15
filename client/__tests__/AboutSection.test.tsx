import '@testing-library/jest-dom';
import 'jest-styled-components';
//import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import AboutSection from '../src/components/HomePageSections/AboutSection';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import lightModeReducer from '../src/Features/Navbar/lightModeSlice';
import { ThemeProvider } from 'styled-components';
import { LightGreyGreen, DarkGreyGreen } from '../src/themes';
import { GPicon, GPicon2 } from "../src/assets/index";


// Helper function to render with providers
const renderWithProviders = (
  ui: JSX.Element,
  {
    reduxState = {}, // Provide a default empty object for reduxState
    theme = LightGreyGreen, // set default theme if none is provided
  } = {}
) => {
  const store = configureStore({
    reducer: {
      lightModeToggle: lightModeReducer,
    },
    preloadedState: reduxState, // pass the initial state
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>
  );
};

// Simulate window.matchMedia
// const matchMediaMock = (query: string) => ({
//   matches: query === '(max-width: 700px)',
//   media: query,
//   onchange: null,
//   addListener: jest.fn(),
//   removeListener: jest.fn(),
//   addEventListener: jest.fn(),
//   removeEventListener: jest.fn(),
//   dispatchEvent: jest.fn(),
// });


describe('Testing About Section and its contents', () => {
  // Before each test case, simulate the media queries
  // beforeAll(() => {
  //   window.matchMedia = matchMediaMock;
  // })

  // beforeEach(() => {
  //   window.innerWidth = 700;
  //   window.dispatchEvent(new Event('resize'));
  // })
  
  // Ensure text content
  test('Renders proper text titles within About Section', () => {
    // Define the initial redux state
    const initialState = {
      lightModeToggle: {
        lightMode: true, // set this based on test case
      },
    };

    // Determine the theme based on lightMode state:
    const theme = initialState.lightModeToggle.lightMode ? LightGreyGreen : DarkGreyGreen;

    // render the component with the props
    renderWithProviders(<AboutSection />, { reduxState: initialState, theme });

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText('Your Gateway to the World of Plants')).toBeInTheDocument();
    expect(screen.getByText('Greener Living, One Tap Away')).toBeInTheDocument();
  });

  // Conditional rendering
  test('Renders corerct image based on themeState', () => {
    const initialState = { lightModeToggle: { lightMode: true } };
    const theme = LightGreyGreen;

    renderWithProviders(<AboutSection />, {
      reduxState: initialState, theme
    });

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', GPicon);

    // Re-render with dark mode
    renderWithProviders(<AboutSection />, {
      reduxState: { lightModeToggle: { lightMode: false } },
      theme: DarkGreyGreen,
    });

    const updatedImages = screen.getAllByRole('img');
    expect(updatedImages[0]).toHaveAttribute('src', GPicon2); 
  });

  // Style and Class Tests
  test('AboutSection Container has correct styles', () => {
    const { container } = renderWithProviders(<AboutSection />);

    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
    
  });

  // test specific component with snap shot testing
  test('AboutBody component has correct styles', () => {
    const initialState = { lightModeToggle: { lightMode: true } };
    const theme = LightGreyGreen;

    const { container } = renderWithProviders(<AboutSection />, { reduxState: initialState, theme });

    //Get the AboutBody component
    const aboutBody = container.querySelector('p');
    

    // Log styles to debug
    // console.log(`Test log here: ${aboutBody?.outerHTML}`);
    // console.log(`Styles applied: ${window.getComputedStyle(aboutBody!).cssText}`);

    // Check the styles
    expect(aboutBody).toHaveStyleRule('font-size', '2rem');
    expect(aboutBody).toHaveStyleRule('line-height', '1.6');
    expect(aboutBody).toHaveStyleRule('color', theme.secondary1.color); // Check color based on theme
    expect(aboutBody).toHaveStyleRule('max-width', '850px');
    expect(aboutBody).toHaveStyleRule('margin', '0 auto 2em');

    // Check media queries
    // expect(aboutBody).toHaveStyleRule('font-size', '1.3rem', {
    //   media: '(max-width: 700px)',
    // });
    // expect(aboutBody).toHaveStyleRule('padding-right', '15px', {
    //   media: '(max-width: 700px)',
    // });
    // expect(aboutBody).toHaveStyleRule('padding-left', '15px', {
    //   media: '(max-width: 700px)',
    // });
  });
});