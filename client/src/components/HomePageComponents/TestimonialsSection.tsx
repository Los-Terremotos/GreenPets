import React from "react";
import styled from "styled-components";
import { GeneralSectionContainer } from '../../styles';

const TestimonialContainer = styled(GeneralSectionContainer)`
  background-color: #FFE8D6;
`;

const TestimonialSection: React.FC = () => {


  return (
    <TestimonialContainer>
      <h1>Inside testimonial section</h1>
      <h3>Place holder. Can just make up content here</h3>
    </TestimonialContainer>
  )
};


export default TestimonialSection;