import React, { useState } from "react";
import styled from "styled-components";
import data from "./arbusData.json";
import Modal from "../Modal/Modal";

const Arbus = () => {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <BigWrap>
      <Wrap>
        {data.map((arbus, index) => {
          return (
            <>
              <Img onClick={() => setImageOpen(index)} src={arbus.img} />{" "}
              <Modal open={imageOpen === index}>
                <ImgWrap>
                  <Img src={arbus.img} />
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

const ButWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ImgWrap = styled.div`
  width: 615px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border: 2px solid #fff;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  &:before {
  }
  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
const Wrap = styled.div`
  margin-top: 90px;
  padding-bottom: 40px;
  width: 630px;
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  margin: 0 15px 15px 0;
  &:hover {
    cursor: pointer;
  }

  &:nth-child(odd) {
    width: 195px;
    height: 195px;
    overflow: hidden;
    object-fit: cover;
  }
  &:nth-child(even) {
    width: 195px;
    height: 195px;
    overflow: hidden;
    object-fit: cover;
  }
  &:nth-child(1) {
    width: 615px;
    height: auto;
  }
`;
const BigWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-left: -30vw;
  padding-left: 30vw;
  background-color: rgba(0, 0, 0, 0.6);
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
