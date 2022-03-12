import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

const Images = ({ img, index, title }) => {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      <Img
        key={index}
        onClick={() => setImageOpen(index)}
        src={img.img}
        alt={title}
      />
      <Modal open={imageOpen === index}>
        <ImgWrap>
          <Img2 key={index} src={img.img} alt={title} />
          <ButWrap>
            <Button onClick={() => setImageOpen(false)}>Close</Button>
          </ButWrap>
        </ImgWrap>
      </Modal>
    </>
  );
};

const Img2 = styled.img`
  max-width: 100%;
  margin: 0.938rem;
`;

const Img = styled.img`
  width: 12.18rem;
  height: 12.18rem;
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 48.75rem) {
    width: 100%;
    height: auto;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    filter: brightness(35%);
    transform: scale(1.02);
  }
`;

const ButWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 0.938rem 0.938rem;
`;

const ImgWrap = styled.div`
  background-color: #030205;
  max-width: 40.625rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: 2px solid #faf7ff;
  padding: 0.313rem 0.625rem;
  background-color: #faf7ff;
  color: #030205;
  font-weight: bold;
  margin-left: 0.938rem;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #faf7ff;
    background-color: #030205;
    cursor: pointer;
  }
`;

export default Images;