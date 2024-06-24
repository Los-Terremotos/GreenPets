import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import FeaturesSection from '../src/components/HomePageSections/FeaturesSection';
import featuresData from '../src/assets/feature-cards/featuresData';
import { FeaturesContent } from '../types';
import { ThemeProvider } from 'styled-components';
import { LightGreyGreen } from '../src/themes';

// Mock the child component (feature card) so we can test if it renders properly in parent component
jest.mock(
  '../src/components/FeatureCard.tsx', () => (props: FeaturesContent) => (
    <div data-testid="mock-feature-card">
      <div>{props.overlayTitle}</div>
      <img src={props.overlayImage} alt={props.overlayTitle}/>
      <div>{props.cardContent}</div>
      <img src={props.cardImage} alt="card"/>
    </div>
  ) 
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

    // Check the number of FeatureCard components rendered
    const featureCards = screen.getAllByTestId('mock-feature-card');
    expect(featureCards).toHaveLength(featuresData.length);

    // Verify that each Feature Card component has the correct props
    featuresData.forEach((feature, index) => {
      // test title
      expect(screen.getByText(feature.overlayTitle)).toBeInTheDocument();
      
      // test overlay Image
      const overlayImage = screen.getAllByRole('img', { name: feature.overlayTitle})[0];
      console.log(`Overlay Image Element HTML: ${overlayImage?.outerHTML}`);
      console.log(`Overlay Image Element src: ${overlayImage?.getAttribute('src')}`);
      expect(overlayImage).toHaveAttribute('src', 'test-file-stub');

      // test card text content
      expect(screen.getByText(feature.cardContent)).toBeInTheDocument();

      // test inner card image
      const cardImage = screen.getAllByRole('img', { name: 'card' })[index];
      console.log(`Card Image Element HTML: ${cardImage?.outerHTML}`);
      console.log(`Card Image Element src: ${cardImage?.getAttribute('src')}`);
      expect(cardImage).toHaveAttribute("src", "test-file-stub");
    })
  })
});