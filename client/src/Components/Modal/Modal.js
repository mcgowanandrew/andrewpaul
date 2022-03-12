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
  inset: 0;
  display: grid;
  place-items: center;
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
  padding: 1.875rem;
  z-index: 1000;
  max-width: 40.625rem;
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
