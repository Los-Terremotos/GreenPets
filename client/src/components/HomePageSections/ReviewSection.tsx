import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GeneralSectionContainer } from "../../styles";
//import ReviewCard from "../ReviewCard";
import ReviewCard from "../ReviewCard";
import UserTest1 from "../../assets/review-cards/UserTest1.png";
import UserTest2 from "../../assets/review-cards/UserTest2.png";
import UserTest3 from "../../assets/review-cards/UserTest3.png";
import UserTest4 from "../../assets/review-cards/UserTest4.png";
import UserTest5 from "../../assets/review-cards/UserTest5.png";
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
    userImage: UserTest4,
    content:
      "I consider myself an experienced plant parent and using GreenPets was a game-changer. Being a nurse, its medicinal plant feature gave me peace of mind. Now, I can choose plants that offer both beauty and potential health benefits.",
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
    userName: "Chrissy N.",
    userImage: UserTest2,
    content:
      "Being a young professional with a hectic schedule, I needed a quick and efficient way to turn my aspirations of having a green thumb into reality. GreenPets made it easy for me to discover and care for plants that fit my busy lifestyle.",
    userTitle: "Satisfied User",
  },
  {
    id: 4,
    userName: "Daniel L.",
    userImage: UserTest5,
    content:
      "Since I don't have the greenest thumb, using GreenPets was really helpful for me. With its easy interface and care tips, I was able to find a plant that I could care for that didn't require much maintenance, which is a must have for me.",
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
  font-size: 4rem;
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
    if (window.innerWidth < 960) {
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
