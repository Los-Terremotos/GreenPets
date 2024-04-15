import React from "react";
import styled from "styled-components";
import {
  cristianImage,
  stephanieImage,
  mattImage,
  kevinImage,
} from "../../assets";
import { ContributorCardProps } from "../../../types";
import ContributorCard from "../ContributorCard";

const contributors: ContributorCardProps[] = [
  {
    id: 0,
    contributorName: `Stephanie Serrano`,
    contributorGitHub: `https://github.com/stephanie-115`,
    contributorLinkedIn: `https://www.linkedin.com/in/stephanie-t-serrano/`,
    contributorImage: stephanieImage,
    content: {
      label: "Favorite Green Pets:",
      pets: "Aspargus Fern, Whale Fin, Red Prayer Plant",
    },
  },
  {
    id: 1,
    contributorName: `Matt Mattox`,
    contributorGitHub: `https://github.com/heyitsmattox`,
    contributorLinkedIn: `https://www.linkedin.com/in/mattmattox12/`,
    contributorImage: mattImage,
    content: {
      label: "Favorite Green Pets:",
      pets: "ZZ Plant, Monstera Deliciosa, Fiddle Leaf Fig",
    },
  },
  {
    id: 2,
    contributorName: `Kevin Phan`,
    contributorGitHub: `https://github.com/KP824`,
    contributorLinkedIn: `https://www.linkedin.com/in/kp824/`,
    contributorImage: kevinImage,
    content: {
      label: "Favorite Green Pets:",
      pets: `Swiss Cheese Plant, Philodendron Brasil, N'joy Pothos`,
    },
  },
  {
    id: 3,
    contributorName: `Cristian Corrales`,
    contributorGitHub: `https://github.com/crisdevs`,
    contributorLinkedIn: `https://www.linkedin.com/in/criscorr/`,
    contributorImage: cristianImage,
    content: {
      label: "Favorite Green Pets:",
      pets: "Silver Vase Plant, Moonflowers, Red Spider Lily",
    },
  },
];

const ContributionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.primary2.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  width: 100%;
  height: auto;
  padding: 50px 0px;

  @media (max-width: 900px) {
    padding-top: 100px;
    padding-bottom: 30px;
  }
`;

const ContributionTitle = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.secondary1.color};
  background-color: ${(props) => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 0.5em;
  transition: background-color 0.5s ease, color 0.5s ease;
  @media(max-width:425px){
    font-size:3rem;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: auto;

  @media (max-width: 960px) {
    flex-wrap: nowrap;
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }
`;

const ContributionSection: React.FC = () => {
  return (
    <ContributionContainer>
      <ContributionTitle>Our Team</ContributionTitle>
      <CardWrapper>
        {contributors.map((card) => (
          <ContributorCard
            key={card.id}
            contributorName={card.contributorName}
            contributorImage={card.contributorImage}
            content={card.content}
            contributorGitHub={card.contributorGitHub}
            contributorLinkedIn={card.contributorLinkedIn}
            id={0}
          />
        ))}
      </CardWrapper>
    </ContributionContainer>
  );
};

export default ContributionSection;
