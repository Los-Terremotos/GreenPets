import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { nextSlide } from '../../Features/carousel/CarouselSlice';
import { RootState } from '../../App/store';

// interface CarouselProps {
//   images: string[];
// }

const images = [
  "https://perenual.com/storage/species_image/540_adenium_obesum/thumbnail/9244335137_6d662ed77c_b.jpg",
  "https://perenual.com/storage/species_image/721_aloe_harlana/thumbnail/5582077315_8d613454aa_b.jpg",
  "https://perenual.com/storage/species_image/727_aloe_suzannae/thumbnail/23704519300_5ec1807143_b.jpg",
  "https://perenual.com/storage/species_image/728_aloe_vera/thumbnail/52619084582_6ebcfe6a74_b.jpg",
  "https://perenual.com/storage/species_image/1025_asparagus_densiflorus_sprengeri/thumbnail/24818361201_11881d4f76_b.jpg",
  "https://perenual.com/storage/species_image/1223_begonia_tuberhybrida_jurassic_pink_splash/thumbnail/22656824786_be81bc2887_b.jpg",
  "https://perenual.com/storage/species_image/1845_chlorophytum_amaniense/thumbnail/2560px-Chlorophytum_orchidastrum_2016-04-28_9101.jpg",
];

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  height: 200px;
  background-color: #FFE8D6;
  transition: transform 0.5s ease;  
`;

const CarouselItem = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 60px;
`;


const CarouselSection: React.FC = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state: RootState) => state.carousel.currentIndex)
  const containerRef = useRef<HTMLDivElement>(null);

  const animate = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * (100 + 60)}%)`;
      requestAnimationFrame(animate);
    }
  }, [currentIndex, dispatch]);

  useEffect(() => {
    animate(); // starts the animate loop

    return () => {
      // clean up the animation loop on component unmount
      cancelAnimationFrame(animate as unknown as number);
    }
  }, [animate]);


  return (
    <>
      <h1>Hello from inside carousel section</h1>
      <CarouselWrapper>
        <CarouselContainer ref={containerRef}>
          {images.map((image, index) => (
            <CarouselItem key={index} src={image} alt={`slide-${index}`} />
          ))}
        </CarouselContainer>
      </CarouselWrapper>
    </>
  )
};

export default CarouselSection;