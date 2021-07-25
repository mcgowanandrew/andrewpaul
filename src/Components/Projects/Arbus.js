import React, { useState } from "react";
import styled from "styled-components";
import data from "./arbusData.json";
import Modal from "../Modal/Modal";

const Arbus = () => {
  const [imageOpen, setImageOpen] = useState(false);

  let headerImg = data.filter((obj) => {
    return obj.img;
  })[0];

  return (
    <BigWrap>
      <Wrap>
        <Img src={headerImg.img} />
        <DetailWrap>
          <TopWrap>
            <Title>Arbus</Title>
            <DemoWrap>
              <Demo
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=HQO0AGLM_bk",
                    "_blank"
                  )
                }
              >
                Demo
              </Demo>
              <Demo
                onClick={() =>
                  window.open(
                    "https://github.com/helloandrewpaul/arbus",
                    "_blank"
                  )
                }
              >
                GitHub
              </Demo>
            </DemoWrap>
          </TopWrap>
          <Description>
            A web App for Photobook Collectors. It's a user submitted resource
            where anyone can access detailed information on Photobooks. Users can add detailed information and upload up to 4 images. In addition there is a password protected Admin area. As Admin you can review, edit, approve or reject user submissions. The Admin can also add a new book and edit existing books including, information and images.
            <br/> 
            <br/>
            This project was completed as final project for Concordia's Web
            Development Bootcamp. 
            <br/>
            <br/>
            I built this project using React, Node.js,
            Express, MongoDB and Styled-Components.
          </Description>
        </DetailWrap>
        {data.slice(1).map((arbus, index) => {
          return (
            <>
              <Img
                key={index}
                onClick={() => setImageOpen(index)}
                src={arbus.img}
                alt="Arbus Project"
              />{" "}
              <Modal open={imageOpen === index}>
                <ImgWrap>
                  <Img2 key={index} src={arbus.img} alt="Arbus Project" />
                  <ButWrap>
                    <Button onClick={() => setImageOpen(false)}>Close</Button>{" "}
                  </ButWrap>
                </ImgWrap>
              </Modal>
            </>
          );
        })}
      </Wrap>
    </BigWrap>
  );
};

const Description = styled.span`
  font-size: 15px;
  width: 100%;
`;

const DemoWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: flex-end;
  width: 100%;
`;

const Title = styled.span`
  font-size: 22px;
`;

const Demo = styled.span`
  font-size: 18px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease-in-out;
  }
`;

const DetailWrap = styled.div`
  width: 600px;
  margin-bottom: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const Img2 = styled.img`
  margin-bottom: 15px;
  @media (max-width: 619x) {
    width: 250px;
    height: auto;
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

const Wrap = styled.div`
  margin: 30px auto;
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const Img = styled.img`
  margin: 0 15px 15px 0;
  width: 195px;
  height: 195px;
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 619px) {
    width: 135px;
    height: 135px;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(35%);
  }
  &:first-child {
    width: 615px;
    height: auto;
    filter: brightness(100%);
    cursor: default;
    @media (max-width: 500px) {
      width: 300px;
    }
  }
`;

const BigWrap = styled.div`
  width: 100%;
  height: 100%;
  transition: all 1s ease-out;
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Arbus;
