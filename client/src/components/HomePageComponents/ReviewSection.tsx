import React from "react";
import styled from "styled-components";
import { GeneralSectionContainer } from '../../styles';
//import ReviewCard from "../ReviewCard";
import ReviewCard from "../ReviewCard";
import UserTest1 from '../../assets/UserTest1.jpeg';
import UserTest2 from '../../assets/UserTest2.jpg';
import UserTest3 from '../../assets/UserTest3.png';
import { ReviewsContent } from "../../../types";


const reviews: ReviewsContent[] = [
  {
    id: 0,
    userName: 'Bulbasaur',
    userImage: UserTest1,
    content: 'Bullllbbaaaasaaaauurrrrrr! Bulba bulba bul bul bulbaa sauuurrr. Saur saur!',
    userTitle: 'Satisfied user',
  },
  {
    id: 1,
    userName: 'Martha Stewart',
    userImage: UserTest2,
    content: 'I think I may be a better person for having given serious time and thought and effort to gardening. Green Pets was my go to resource for discovering a universe of eclectic plants!',
    userTitle: 'Satisfied User',
  },
  {
    id: 2,
    userName: 'Happy Gloom',
    userImage: UserTest3,
    content: 'Glooom, gloom gloom gloom gloom gloom gloom gloom gloom gloom!!! Gloooom gloooom, gooooom gloooom, gloom ~',
    userTitle: 'Satisfied User',
  }
];

const ReviewContainer = styled(GeneralSectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #FFE8D6;
`;

const ReviewTitle = styled.h1`
  font-size: 3rem;
  color: #FFE8D6;
  background-color: #7E7E63;
  padding: 10px 30px;
  border-radius: 10px;
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: auto;

  @media (max-width: 960px) {
    min-height: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ReviewSection: React.FC = () => {


  return (
    <ReviewContainer>
      <ReviewTitle>What people are saying about us</ReviewTitle>
      <CardWrapper>
        {reviews.map((card) => (
          <ReviewCard 
            key={card.id} 
            userName={card.userName} 
            userImage={card.userImage}
            content={card.content}
            userTitle={card.userTitle}
          />
        ))}
      </CardWrapper>
    </ReviewContainer>
  )
};


export default ReviewSection;