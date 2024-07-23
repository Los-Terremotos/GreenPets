import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'; // add fireEvent when needed
import FeaturesSection from '../src/components/HomePageSections/FeaturesSection';
import featuresData from '../src/assets/feature-cards/featuresData';
import { FeaturesContent } from '../types';
import { ThemeProvider } from 'styled-components';
import { LightGreyGreen } from '../src/themes';

// Mock the child component (feature card) so we can test if it renders properly in parent component
jest.mock(
  '../src/components/FeatureCard.tsx', () => (props: FeaturesContent) => {
    //console.log('Mock FeatureCard Props:', props);
    return (
      <div data-testid="mock-feature-card">
      <div>{props.cardContent}</div>
      <div>{props.overlayTitle}</div>
      <img src={props.overlayImage} alt={props.overlayTitle}/>
      <img src={props.cardImage} alt={props.alt}/>
    </div>
    )
  }
);

describe('Testing functionality of Features section', () => {
  // Helper function to render with ThemeProvider
  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={LightGreyGreen}>{ui}</ThemeProvider>)
  }

  // test that Title of Feature section exists
  test('renders Feature Section with proper title', () => {
    // render the section
    renderWithTheme(<FeaturesSection />);

    // Check component title
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  test('renders the correct amount of feature cards', () => {
    // render the section
    renderWithTheme(<FeaturesSection />);

    // Check the number of FeatureCard components rendered
    const featureCards = screen.getAllByTestId('mock-feature-card');
    expect(featureCards).toHaveLength(featuresData.length);
  });
    
    
  test('each feature card has correct props', () => {
    renderWithTheme(<FeaturesSection />);
    const mockData = [
      {
        id: 0,
        overlayTitle: 'Personalized Plant Recommendations',
        overlayImage: 'test-file-stub',
        cardContent: 'You will receive tailored plant recommendations based on your preferences and gardening expertise. This ensures you discover plants that align with your desired indoor/outdoor environment and match your skill level, enhancing the likelihood of successful plant care.',
        cardImage: 'test-file-stub',
        alt: 'Indoor/outdoor plants image for feature card 1'
      }
    ];

    mockData.forEach((feature) => {
      expect(screen.getByText(feature.overlayTitle)).toBeInTheDocument();
      expect(screen.getByText(feature.cardContent)).toBeInTheDocument();

      // Test overlay Image alt
      const overlayImage = screen.getByAltText(feature.overlayTitle);
      expect(overlayImage).toBeInTheDocument();

      // Test inner card image alt
      const cardImage = screen.getByAltText(feature.alt);
      expect(cardImage).toBeInTheDocument();

      // // Additional check for src attribute using image element
      // const imgElements = screen.getAllByRole('img');
      // imgElements.forEach((img) => {
      //   expect(img).toHaveAttribute('src', 'test-file-stub');
      // });
    });
  });
});


describe('Integration testing for FeaturesSection component', () => {
  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={LightGreyGreen}>{ui}</ThemeProvider>)
  };

  test('render FeaturesSection with all FeatureCard components', () => {
    renderWithTheme(<FeaturesSection />);

    // Check if FeatureSection title is present
    expect(screen.getByText('Services')).toBeInTheDocument();

    // Check if all FeatureCard components are rendered
    featuresData.forEach((feature) => {
      // Check text content
      expect(screen.getByText(feature.overlayTitle)).toBeInTheDocument();
      expect(screen.getByText(feature.cardContent)).toBeInTheDocument();
      
    });

    // verify image count
    const overlayImages = screen.getAllByRole('img', { name: (alt) => alt !== 'card' }); // This variable evaluates to 8 since there are technically 8 images within `featuresData`
    const cardImages = screen.getAllByAltText((alt) => alt.includes('Indoor/outdoor plants image'));

    expect(overlayImages).toHaveLength(featuresData.length * 2); // Need to multiply by two since technically, 8 images exist within the `featuresData` module. 
    expect(cardImages).toHaveLength(featuresData.length);
    
  });

});

  // test('interacts with FeatureCard components correctly', () => {
  //   renderWithTheme(<FeaturesSection />);

    // Simulate interactions if any, e.g., clicking on FeatureCard
    // featuresData.forEach((feature, index) => {
    //   const overlayTitleElement = screen.getByText(feature.overlayTitle);
    //   fireEvent.click(overlayTitleElement);
    // });
    // One thing we could maybe test is the 'transitional sliding affect when hovering over the feature card instead of clicking on it. Will need to research if testing this is necessary and if robust test for long term
  //});