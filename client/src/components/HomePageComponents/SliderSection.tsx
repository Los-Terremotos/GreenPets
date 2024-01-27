import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
// import { useDispatch, useSelector } from 'react-redux';
// import { nextSlide } from '../../Features/slider/sliderSlice';
// import { RootState } from '../../App/store';

const images = [
  "https://perenual.com/storage/species_image/540_adenium_obesum/thumbnail/9244335137_6d662ed77c_b.jpg",
  "https://perenual.com/storage/species_image/721_aloe_harlana/thumbnail/5582077315_8d613454aa_b.jpg",
  "https://perenual.com/storage/species_image/727_aloe_suzannae/thumbnail/23704519300_5ec1807143_b.jpg",
  "https://perenual.com/storage/species_image/728_aloe_vera/thumbnail/52619084582_6ebcfe6a74_b.jpg",
  "https://perenual.com/storage/species_image/1025_asparagus_densiflorus_sprengeri/thumbnail/24818361201_11881d4f76_b.jpg",
  "https://perenual.com/storage/species_image/1223_begonia_tuberhybrida_jurassic_pink_splash/thumbnail/22656824786_be81bc2887_b.jpg",
  "https://perenual.com/storage/species_image/1845_chlorophytum_amaniense/thumbnail/2560px-Chlorophytum_orchidastrum_2016-04-28_9101.jpg",
  "https://perenual.com/storage/species_image/22_acer_japonicum_green_cascade/thumbnail/4847225395_2509ee2bfe_b.jpg",
  "https://perenual.com/storage/species_image/23_acer_macrophyllum/thumbnail/52135137216_8a124b5188_b.jpg",
  "https://perenual.com/storage/species_image/24_acer_macrophyllum_mocha_rose/thumbnail/4715169892_220a9d39f6_b.jpg",
  "https://perenual.com/storage/species_image/25_acer_negundo_flamingo/thumbnail/5867345385_a9dff5bee7_b.jpg",
  "https://perenual.com/storage/species_image/26_acer_negundo_kellys_gold/thumbnail/28819730054_e2a2b797c9_b.jpg"
];

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #CB9B7C;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  padding: 20px 0;
  background-color: #CB9B7C;
  white-space: nowrap;
  position: relative;
  width: 100vw;
`;

const ImageSlider = styled.div`
  display: inline-block;
  animation: ${slide} 35s infinite linear;
`;

const PlantImage = styled.img`
  height: 150px;
  margin: 0 60px;
  border-radius: 5px;
`;

const SliderTitle = styled.h2`
  background-color: #e9edc9;
  color: #CB9B7C;
  padding: 10px 30px;
  border-radius: 10px;
`;

const SliderSection: React.FC = () => {
  const imagesSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Logic to clone and append the content after the component mounts
    if (imagesSliderRef.current) {
      // cloning logic targets the "ImageSlider" component directly. Clones the entire component then appends it to the parent node, which is the "ImageSlider"
      const copy = imagesSliderRef.current.cloneNode(true);
      imagesSliderRef.current.parentNode?.appendChild(copy);
    }
  }, []); // Empty dependency array ensures this effect runs once after mount

  return (
    <>
      <SliderWrapper>
        <SliderTitle>
          🪴 Plant Parenthood Perfected: GreenPets, Nurturing Nature's Beauty 🌱
        </SliderTitle>
        <SliderContainer>
          <ImageSlider ref={imagesSliderRef}>
            {images.map((image, index) => (
              <PlantImage key={index} src={image} />
            ))}
          </ImageSlider>
        </SliderContainer>
      </SliderWrapper>
    </>
  )
};

export default SliderSection;


  // const dispatch = useDispatch();
  // const currentIndex = useSelector((state: RootState) => state.carousel.currentIndex)
  // const containerRef = useRef<HTMLDivElement>(null);
  // const animationRef = useRef<number | null>(null);
  
  // const animate = useCallback(() => {
  //   if (containerRef.current) {
  //     // Adjust the condition to reset currentIndex to 0 when it reaches the end
  //     if (currentIndex === images.length) {
  //       dispatch(nextSlide(images.length));
  //     }
  //     containerRef.current.style.transform = `translateX(-${currentIndex * (100 + 20)}%)`;
  //     animationRef.current = requestAnimationFrame(animate);
  //   }
  // }, [currentIndex, dispatch]);

  // useEffect(() => {
  //   animationRef.current = requestAnimationFrame(animate); // State the animate loop

  //   return () => {
  //     // clean up the animation loop on component unmount
  //     if (animationRef.current) {
  //       cancelAnimationFrame(animationRef.current);
  //     }
  //   };
  // }, [animate]);