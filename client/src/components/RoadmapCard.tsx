import styled from "styled-components";
import FlipCard from "./FlipCard";
import { RoadmapCardProps } from "../../types";

const RoadmapCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;


  &:hover {
    transform: translateY(-10px) scale(1.02);
    transition: transform 0.5s ease;
  }
`;

const RoadmapCard: React.FC<RoadmapCardProps> = ({
  image,
  subtitle,
  content,
  icon,
}) => {
  return (
    <>
      <RoadmapCardContainer>

        <FlipCard card={{ image: image, subtitle: subtitle, content: content, icon: icon }} />
      </RoadmapCardContainer>
    </>
  );
};

export default RoadmapCard;
