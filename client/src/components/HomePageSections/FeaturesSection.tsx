import React from 'react';
import styled from 'styled-components';
import { GeneralSectionContainer } from '../../styles';
import FeatureCard from '../FeatureCard';
import featuresData from '../../assets/feature-cards/featuresData';

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
  font-size: 4rem;
  background-color: ${props => props.theme.primary1.color};
  display: inline-block;
  color: ${props => props.theme.secondary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  transition: background-color 0.5s ease, color 0.5s ease;
  
  @media(max-width:425px){
    font-size:3rem;
  }
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
        <FeaturesTitle>Services</FeaturesTitle>
        <br />
        <br />
        <FeaturesCardsContainer>
          {featuresData.map((card) => (
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