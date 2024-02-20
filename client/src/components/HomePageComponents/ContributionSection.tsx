import React from "react";
import styled from "styled-components";
import { CristianImage, StephanieImage, MattImage, KevinImage }from "../../assets";
//import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ContributorCardProps } from '../../../types';
import ContributorCard from "../ContributorCard";

const contributors: ContributorCardProps[] = [
  {
    id: 0,
    contributorName: `Stephanie Serrano`,
    contributorGitHub: `https://github.com/stephanie-115`,
    contributorLinkedIn: `https://www.linkedin.com/in/stephanie-t-serrano/`,
    contributorImage: StephanieImage,
    content: `hello test`,
  },
  {
    id: 1,
    contributorName: `Matt Madox`,
    contributorGitHub: `hhttps://github.com/heyitsmattox`,
    contributorLinkedIn: `https://www.linkedin.com/in/mattmattox12/`,
    contributorImage: MattImage,
    content: `hello test`,
  },
  {
    id: 2,
    contributorName: `Kevin Phan`,
    contributorGitHub: `https://github.com/KP824`,
    contributorLinkedIn: `https://www.linkedin.com/in/kp824/`,
    contributorImage: KevinImage,
    content: `hello test`,
  },
  {
    id: 3,
    contributorName: `Cristian Corales`,
    contributorGitHub: `https://github.com/crisdevs`,
    contributorLinkedIn: `https://www.linkedin.com/in/criscorr/`,
    contributorImage: CristianImage,
    content: `hello test`,
  }

];
// const ContributionContainer = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background-color: ${props => props.theme.primary1.color};
//   color: ${props => props.theme.secondary1.color};
//   transition: background-color 0.5s ease, color 0.5s ease;

//     h1{
//       text-align:center;
//       padding-top:50px;
//     }

//     li{
//         list-style: none;
//         text-align:center;
//     }
//     .contributor-profile{
//         grid-area: contributor
//     }
//     .contribution-icons{
//         display: flex;
//         font-size: 40px;
//         justify-content: space-around;
//     }

//     .icon : hover{
//         color:green
//     }
// `;

const ContributionContainer = styled.div`
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

const ContributionTitle = styled.div`
  font-size: 4.5rem;
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