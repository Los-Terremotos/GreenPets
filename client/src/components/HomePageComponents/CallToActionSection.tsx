import React from 'react';
import styled from 'styled-components';
import { GeneralSectionContainer } from '../../styles';

const CallToActionContainer = styled(GeneralSectionContainer)`
  background-color: #CB9B7C;
`;

const CallToActionSection: React.FC = () => {


  return (
    <CallToActionContainer>
      <h1>Call to action section</h1>
      <h3>Add get started button</h3>
      <h3>Add login / sign up buttons</h3>
    </CallToActionContainer>
  )
}; 

export default CallToActionSection;