import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
import { RootState } from '../App/store';
import ResultsDetailCard from './ResultsDetailCard';
import { selectDetailCardState } from '../Features/DetailsCard/cardSlice';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  z-index: 5;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;



const Modal: React.FC<ModalProps> = () => {
  const loginIsOpen = useSelector((state: RootState) => state.loginToggle.loginIsOpen);
  const signUpIsOpen = useSelector((state: RootState) => state.signUpToggle.signUpIsOpen);
  //const detailCardIsActive = useSelector((state: RootState) => state.detailCard)
  const detailCardData = useSelector(selectDetailCardState);

  console.log(`Modal, line 40: ${JSON.stringify(detailCardData)}`);

  


  return (
    <>
      
      <ModalContainer>
        
        
        
        {loginIsOpen && <Login />}
        {signUpIsOpen && <SignUp />}
        {
          detailCardData.detailCardIsActive && 
          detailCardData.data && 
          <ResultsDetailCard data={{ plantsMoreInfo: detailCardData.data}}/>
        }

      </ModalContainer>
    </>
  )
}

export default Modal;
