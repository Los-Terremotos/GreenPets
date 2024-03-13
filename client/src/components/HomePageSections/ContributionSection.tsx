import React from "react";
import styled from "styled-components";
import { cristianImage, stephanieImage, mattImage, kevinImage }from "../../assets";
import { ContributorCardProps } from '../../../types';
import ContributorCard from "../ContributorCard";

const contributors: ContributorCardProps[] = [
  {
    id: 0,
    contributorName: `Stephanie Serrano`,
    contributorGitHub: `https://github.com/stephanie-115`,
    contributorLinkedIn: `https://www.linkedin.com/in/stephanie-t-serrano/`,
    contributorImage: stephanieImage,
    content: `Data Dialects, Bulldog Bytes and Pawfect Algorithms: Engineer Extraordinaire`,
  },
  {
    id: 1,
    contributorName: `Matt Mattox`,
    contributorGitHub: `https://github.com/heyitsmattox`,
    contributorLinkedIn: `https://www.linkedin.com/in/mattmattox12/`,
    contributorImage: mattImage,
    content: `Game Overload and Husky Cuddles: Life of a FE Wizard`,
  },
  {
    id: 2,
    contributorName: `Kevin Phan`,
    contributorGitHub: `https://github.com/KP824`,
    contributorLinkedIn: `https://www.linkedin.com/in/kp824/`,
    contributorImage: kevinImage,
    content: `Master Blunder Debugging Full Pancake Stacks`,
  },
  {
    id: 3,
    contributorName: `Cristian Corrales`,
    contributorGitHub: `https://github.com/crisdevs`,
    contributorLinkedIn: `https://www.linkedin.com/in/criscorr/`,
    contributorImage: cristianImage,
    content: `Code, Charisma, and Chaos: The Mosh Pit Maven's Front End Odyssey`,
  }

];


const ContributionContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const ContributionTitle = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.secondary1.color};
  background-color: ${props => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 0.5em;
  transition: background-color 0.5s ease, color 0.5s ease;
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: auto;

  @media (max-width: 960px) {
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }
`


const ContributionSection: React.FC = () => {

  return (
    <ContributionContainer>
      <ContributionTitle>Contributors</ContributionTitle>
      <CardWrapper>
        {contributors.map((card) => (
          <ContributorCard 
            key={card.id}
            contributorName={card.contributorName}
            contributorImage={card.contributorImage}
            content={card.content}
            contributorGitHub={card.contributorGitHub}
            contributorLinkedIn={card.contributorLinkedIn} id={0}
          />
        ))}
      </CardWrapper>
    </ContributionContainer>
  )
}


export default ContributionSection;