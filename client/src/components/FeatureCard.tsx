import React from 'react';
import styled from 'styled-components'


const CardOverlay = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 10px;
  position: absolute;
  background: rgba(40, 40, 40, 0.6);
  //background-color: pink;
  top: 100%;
  transform: translateY(-100%); /* initially positioned off screen */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 14px;
  font-weight: bold;
  backdrop-filter: blur(5px);
  transition: transform 1s;
`;

const CardContainer = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 10px;
  border: 3px solid limegreen;
  position: relative;
  overflow: hidden;

  &:hover ${CardOverlay} {
    transform: translateY(0); /* Slide the CardOverlay to the top on hover*/
  }
    
  }
`;



const FeatureCard: React.FC = () => {

  return (
    <>
      <CardContainer>
        <CardOverlay>
          <h1>Hello</h1>
        </CardOverlay>
      </CardContainer>
    </>
  );
};

export default FeatureCard;