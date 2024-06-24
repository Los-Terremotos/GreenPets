import '@testing-library/dom'
import { render, screen } from '@testing-library/react';
import FeaturesSection from '../src/components/HomePageSections/FeaturesSection';
import { features } from '../src/components/HomePageSections/FeaturesSection';

// Mock the child component (feature card) so we can test if it renders properly in parent component
jest.mock(
  '../src/components/FeatureCard.tsx', () => (props) => (
    <div data-testid="mock-feature-card">
      <div>{props.overlayTitle}</div>
      <img src={props.overlayImage} alt={props.overlayTitle}/>
      <div>{props.cardContent}</div>
      <img src={props.cardimage} alt="card"/>
    </div>
  ) 
);

describe('Testing functionality of Features section', () => {

  // test that Title of Feature section exists
  test('renders Feature Section with proper title', () => {
    // render the section
    render(<FeaturesSection />);

    // Check component title
    expect(screen.getByText('Services')).toBeInTheDocument();

    // Check the number of FeatureCard components rendered
    const featureCards = screen.getAllByTestId('mock-feature-card');
    expect(featureCards).toHaveLength(features.length);

    // Verify that each Feature Card component has the correct props
    features.forEach((feature, index) => {
      expect(screen.getByText(feature.overlayTitle)).toBeInTheDocument();
      expect(screen.getAllByRole('img', { name: feature.overlayTitle })[index]).toHaveAttribute('src', feature.overlayImage);
      expect(screen.getByText(feature.cardContent)).toBeInTheDocument();
      expect(screen.getAllByRole('img', { name: 'card' })[index]).toHaveAttribute('src', feature.cardImage);
    })
  })
})