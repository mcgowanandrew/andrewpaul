import React from 'react';
import styled from 'styled-components';

const Modal = ({ open, children }) => {
  if (!open) {
    return null;
  }

  return (
    <Overlay>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: rgba(3, 2, 5, 0.9);
  z-index: 1000;
  transition: all 0.5s ease-out;
  animation: fadein 0.5s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ModalDiv = styled.div`
padding:30px;
  z-index: 1000;
  max-width: 650px;
  transition: all 0.5s ease-out;
  animation: fadein 0.5s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
`;

export default Modal;
