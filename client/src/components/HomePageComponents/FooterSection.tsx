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
      <h1>Looking for ways to contribute?</h1>
      <h3>Check out our Repo on github!</h3>
      <a href = "https://github.com/Los-Terremotos/GreenPets">Github</a>
    </FooterContainer>
  )
};


export default FooterSection;