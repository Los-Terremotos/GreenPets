import React from 'react';
import styled from 'styled-components'
import { FeatureCardProps } from '../../types';

// create separate interfaces for each component
interface CardOverlayProps {
  overlayImage: string;
}

const CardOverlay = styled.div<CardOverlayProps>`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  //background: rgba(40, 40, 40, 0.6); // attribute to create transparent background effect
  background: url(${(props) => props.overlayImage}) center/cover no-repeat;
  top: 100%;
  transform: translateY(-100%); /* initially positioned off screen */
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  backdrop-filter: blur(5px);
  transition: transform 1s;
`;

// create separate interfaces for each component
interface CardContainerProps {
  cardImage: string;
}

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  margin: 30px;
  height: 500px;
  width: 700px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background: url(${(props) => props.cardImage}) center/cover no-repeat;

  h3 {
    background: rgba(40, 40, 40, 0.6); // attribute to create transparent background 
    color: whitesmoke;
    padding: 10px;
    border-radius: 10px;
  }

  &:hover ${CardOverlay} {
    transform: translateY(0); /* Slide the CardOverlay to the top on hover*/
  }
    
  }
`;



const FeatureCard: React.FC<FeatureCardProps> = ({ overlayTitle, overlayImage, cardContent, cardImage }) => {

  return (
    <>
      <CardContainer cardImage={cardImage}>
        <h3>{cardContent}</h3>
        <CardOverlay overlayImage={overlayImage}>
          <h1>{overlayTitle}</h1>
        </CardOverlay>
      </CardContainer>
    </>
  );
};

export default FeatureCard;