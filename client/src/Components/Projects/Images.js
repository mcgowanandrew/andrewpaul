import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';

const Images = ({ img, index, title, length }) => {
  const [imageOpen, setImageOpen] = useState(false);
  const [current, setCurrent] = useState(index);

// pass props down to modal
  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // console.log('length',length);
  // console.log('img',img.img);
  console.log('index', current);


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
          {current === index && <Img2 key={index} index={current} src={img.img} alt={title} />}
          <ButWrap>
            <Button onClick={prevImg}>Prev</Button>
            <Button onClick={nextImg}>Next</Button>
            <Button onClick={() => setImageOpen(false)}>Close</Button>
          </ButWrap>
        </ImgWrap>
      </Modal>
    </>
    
  );
  
};

const Img2 = styled.img`
  max-width: 100%;
  margin: 15px;
`;
const Img = styled.img`
  width: 195px;
  height: 195px;
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 780px) {
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
  margin: 0 15px 15px;
`;
const ImgWrap = styled.div`
  background-color: #030205;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: 2px solid #faf7ff;
  padding: 5px 10px;
  background-color: #faf7ff;
  color: #030205;
  font-weight: bold;
  margin-left: 15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #faf7ff;
    background-color: #030205;
    cursor: pointer;
  }
`;

export default Images;
