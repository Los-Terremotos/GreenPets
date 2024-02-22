import React from 'react';
import styled from 'styled-components';
import { GeneralSectionContainer } from '../../styles';
import FeatureCard from '../FeatureCard';
import { FeaturesContent } from '../../../types';
import IDP1 from '../../assets/feature-cards/IDP1.jpg';
import IDP2 from '../../assets/feature-cards/IDP2.jpg';
import IDP3 from '../../assets/feature-cards/IDP3.jpg';
import IDP4 from '../../assets/feature-cards/IDP4.jpg';
import ODP1 from '../../assets/feature-cards/ODP1.jpg';
import ODP2 from '../../assets/feature-cards/ODP2.jpg';
import ODP3 from '../../assets/feature-cards/ODP3.jpg';
import ODP4 from '../../assets/feature-cards/ODP4.jpg';


const features: FeaturesContent[] = [
  {
    id: 0,
    overlayTitle: 'Personalized Plant Recommendations',
    overlayImage: ODP1,
    cardContent: 'You will receive tailored plant recommendations based on your preferences and gardening expertise. This ensures you discover plants that align with your desired indoor/outdoor environment and match your skill level, enhancing the likelihood of successful plant care.',
    cardImage: IDP1,
  },
  {
    id: 1,
    overlayTitle: 'Effortless Plant Selection',
    overlayImage: ODP2,
    cardContent: `Our short questionnaire simplifies the plant selection process, making it easy for you to find the perfect plant match. By focusing on just two key factors, you can quickly navigate and choose plants that suit you specific needs without overwhelming choices.`,
    cardImage: IDP2,
  },
  {
    id: 2,
    overlayTitle: 'User-Friendly Plant Exploration',
    overlayImage: ODP3,
    cardContent: `You can explore recommended plants in a user-friendly interface, enabling you to inspect each plant visually. This intuitive exploration allows you to make informed decisions about which plants appeal to you aesthetically and align with your personal taste, contributing to a positive overall user experience.`,
    cardImage: IDP3,
  },
  {
    id: 3,
    overlayTitle: 'In-Depth Plant Information',
    overlayImage: ODP4,
    cardContent: `You have the option to access detailed information about each recommended plant. This feature empowers you with knowledge about the characteristics, care requirements, and any additional insights for the chosen plant. Providing comprehensive information encourages you to make well-informed decisions and boosts your confidence in caring for the selected plants.`,
    cardImage: IDP4,
  }
];

const FeaturesSectionContainer = styled(GeneralSectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.primary2.color};
  transition: ${props => props.theme.transitions.backgroundColor};
  width: 100%;
  height: auto;
  padding: 50px 0px;

  @media (max-width: 900px) {
  padding-top: 100px;
  }
`
const FeaturesTitle = styled.h1`
  font-size: 4.5rem;
  background-color: ${props => props.theme.primary1.color};
  display: inline-block;
  color: ${props => props.theme.secondary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  transition: background-color 0.5s ease, color 0.5s ease;
`

const FeaturesCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FeaturesSection: React.FC = () => {


  return (
    <>
      <FeaturesSectionContainer>
        <FeaturesTitle>Features</FeaturesTitle>
        <br />
        <br />
        <FeaturesCardsContainer>
          {features.map((card) => (
            <CardWrapper key={card.id}>
              <FeatureCard 
                overlayTitle={card.overlayTitle}
                overlayimage={card.overlayImage}
                cardContent={card.cardContent}
                cardimage={card.cardImage}
              />
            </CardWrapper>
          ))}
        </FeaturesCardsContainer>
      </FeaturesSectionContainer>
    </>
  )
};

export default FeaturesSection;