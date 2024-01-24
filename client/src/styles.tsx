import styled, { createGlobalStyle } from 'styled-components';

// Global styles

export const GeneralSectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const TextContainer = styled.div`
  flex: 1;
  text-align: center; 
  margin-right: 20%;
  border: solid 2px;
  border-color: black;

  h1{
    font-size: 40px;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    display: none;
  }

  color: white;

`