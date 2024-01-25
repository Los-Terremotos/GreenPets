import React from "react";
import styled from "styled-components";


const FooterContainer = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #75472F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const FooterSection: React.FC = () => {


  return (
    <FooterContainer>
      <h1>Footer section</h1>
      <h3>Add how to contact or how to contribute information</h3>
      <h3>Add links to docs or github</h3>
    </FooterContainer>
  )
};


export default FooterSection;