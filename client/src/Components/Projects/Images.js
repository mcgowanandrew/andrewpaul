import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

const Images = ({ img, index }) => {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      {' '}
        <Img
          key={index}
          onClick={() => setImageOpen(index)}
          src={img.img}
          alt='Project Image'
        />{' '}
      <Modal open={imageOpen === index}>
        <ImgWrap>
          <Img2 key={index} src={img.img} alt='Project image' />
          <ButWrap>
            <Button onClick={() => setImageOpen(false)}>Close</Button>{' '}
          </ButWrap>
        </ImgWrap>
      </Modal>
    </>
  );
};



const Img2 = styled.img`
  margin-bottom: 15px;
  @media (max-width: 619x) {
    width: 250px;
    height: auto;
  }
`;
const Img = styled.img`
  margin: 8px auto;
  width: 195px;
  height: 195px;
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 619px) {
    width: 135px;
    height: 135px;
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
`;
const ImgWrap = styled.div`
  background-color: #030205;
  width: 615px;
  display: flex;
  flex-direction: column;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const Button = styled.button`
  border: 2px solid #faf7ff;
  padding: 5px 10px;
  background-color: #faf7ff;
  color: #030205;
  font-weight: bold;
  &:before {
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #faf7ff;
    background-color: #030205;
    cursor: pointer;
  }
`;



export default Images;
