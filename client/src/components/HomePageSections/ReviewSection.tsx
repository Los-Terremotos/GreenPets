import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GeneralSectionContainer } from "../../styles";
//import ReviewCard from "../ReviewCard";
import ReviewCard from "../ReviewCard";
import UserTest1 from "../../assets/review-cards/UserTest1.png";
import UserTest2 from "../../assets/review-cards/UserTest2.png";
import UserTest3 from "../../assets/review-cards/UserTest3.png";
import Placeholder from "../../assets/review-cards/placeholder.jpeg";
import { ReviewsContent } from "../../../types";

const reviews: ReviewsContent[] = [
  {
    id: 0,
    userName: "Jonathan S.",
    userImage: UserTest1,
    content:
      "As a devoted dog parent living in the heart of NYC, finding pet-safe plants to liven up my small apartment was a game-changer. GreenPets not only brightened my living space but also made sure my furry friend stays safe and happy. ",
    userTitle: "Satisfied user",
  },
  {
    id: 1,
    userName: "Christine L.",
    userImage: UserTest2,
    content:
      "Being a young professional with a hectic schedule, I needed a quick and efficient way to turn my aspirations of having a green thumb into reality. GreenPets made it easy for me to discover and care for plants that fit my busy lifestyle.",
    userTitle: "Satisfied User",
  },
  {
    id: 2,
    userName: "Joseph M.",
    userImage: UserTest3,
    content:
      "As a passionate teacher, I wanted to bring a burst of life into my classroom. GreenPets not only helped me discover vibrant plants but also provided valuable insights into their care. My students and I now enjoy a greener, livelier learning space.",
    userTitle: "Satisfied User",
  },
  {
    id: 3,
    userName: "Cristian's Girlfriend",
    userImage: Placeholder,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis, ad rerum unde, similique nesciunt ex aliquam dolore excepturi enim non, sit maxime autem tempora mollitia rem doloremque vel id.",
    userTitle: "Satisfied User",
  },
  {
    id: 4,
    userName: "Cristian's Girlfriend's Bro",
    userImage: Placeholder,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis, ad rerum unde, similique nesciunt ex aliquam dolore excepturi enim non, sit maxime autem tempora mollitia rem doloremque vel id.",
    userTitle: "Satisfied User",
  },
  {
    id: 5,
    userName: "KP's Girlfriend",
    userImage: Placeholder,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis, ad rerum unde, similique nesciunt ex aliquam dolore excepturi enim non, sit maxime autem tempora mollitia rem doloremque vel id.",
    userTitle: "Satisfied User",
  },
];

const ReviewContainer = styled(GeneralSectionContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.primary2.color};
  transition: ${(props) => props.theme.transitions.backgroundColor};
  height: 100vh;
`;

const ReviewTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.secondary1.color};
  background-color: ${(props) => props.theme.primary1.color};
  padding: 10px 30px;
  border-radius: 10px;
  transition: background-color 0.5s ease, color 0.5s ease;

  @media (max-width: 960px) {
    margin-top: 100px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  height: auto;

  @media (max-width: 960px) {
    
    min-height: 500px;
    flex-direction: column;
    align-items: center;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: ${(props) => props.theme.secondary1.color};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover {
    color: #163020;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 10px;
`;

const RightArrowButton = styled(ArrowButton)`
  right: 10px;
`;

const ReviewSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [displayedReviews, setDisplayedReviews] = useState(3);

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviews.length - 1 : prevReview - 1
    );
  };

  const updateDisplayedReviews = () => {
    if(window.innerWidth < 960) {
      setDisplayedReviews(1);
    } else {
      setDisplayedReviews(3);
    }
  };

  useEffect(() => {
    updateDisplayedReviews();

    window.addEventListener("resize", updateDisplayedReviews);

    return () => {
      window.removeEventListener("resize", updateDisplayedReviews);
    };
  }, []);

  const getDisplayedReviews = () => {
    const reviewsToDisplay = [];
    for (let i = 0; i < displayedReviews; i++) {
      const index = (currentReview + i) % reviews.length;
      reviewsToDisplay.push(reviews[index]);
    }
    return reviewsToDisplay;
  };

  return (
    <ReviewContainer>
      <ReviewTitle>Testimonials</ReviewTitle>
      <CardWrapper>
        <LeftArrowButton
          onClick={handlePrevReview}
          disabled={currentReview === 0}
        >
          {"<"}
        </LeftArrowButton>
        {getDisplayedReviews().map((card, index) => (
          <ReviewCard
            key={index}
            userName={card.userName}
            userImage={card.userImage}
            content={card.content}
            userTitle={card.userTitle}
          />
        ))}
        <RightArrowButton onClick={handleNextReview}>{">"}</RightArrowButton>
      </CardWrapper>
    </ReviewContainer>
  );
};

export default ReviewSection;
