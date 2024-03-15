import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styled from "styled-components";
import { RoadmapCardProps } from "../../types";

interface FlipCardProps {
  card: RoadmapCardProps;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  max-width: 500px;
  width: 360px;
  height: 360px;
  cursor: pointer;
  perspective: 800px;
  transform-style: preserve-3d;
  transition: transform 0.2s ease;
  margin: 12px;
  border-radius: 10px;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    transition: transform 0.5s ease;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: none;
    height: auto;
    margin: 6px;
  }
`;

const C = styled(a.div)`
  position: absolute;
  max-width: 500px;
  max-height: 500px;
  width: 350px;
  height: 200px;
  cursor: pointer;
  will-change: transform, opacity;
`;

const BackCard = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const DisplayImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: contain;
`;

const Card = styled(a.div)`
  position: relative;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 300px;
  max-width: 340px;
  border: 4px solid ${(props) => props.theme.primary2.color}; 

  &:hover {
    transform: scale(1.1);
  }

  h3 {
    color: ${(props) => props.theme.secondary2.color};
  }

  p {
    color: ${(props) => props.theme.secondary1.color};
  }
`;

const Icon = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const FlipCard: React.FC<FlipCardProps> = ({ card }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Container onClick={() => set((state) => !state)}>
      <C
        className={flipped ? "back" : ""}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <C
        className={flipped ? "front" : ""}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <BackCard>
          <DisplayImg src={card.image} />
        </BackCard>
      </C>
      <Card
        className={flipped ? "back" : ""}
        style={{ opacity, transform, rotateX: "180deg" }}
      >
        <div className="card">
          <h3>{card.subtitle}</h3>
          <p>{card.content}</p>
          <Icon src={card.icon}/>
        </div>
      </Card>
    </Container>
  );
};

export default FlipCard;
