import React from "react";
import styled from "styled-components";
import data from "./arbusdata.json";
console.log("data", data);

const Arbus = () => {
  return (
    <BigWrap>
      <Wrap>
        {data.slice(0,1).map((arbus) => {
          return <Img src={arbus.img} />;
        })}
         {data.slice(1,14).map((arbus) => {
          return <Img src={arbus.img} />;
        })}
      </Wrap>
    </BigWrap>
  );
};
const Wrap = styled.div`
  margin-top: 90px;
  padding-bottom: 40px;
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  /* align-content: flex-start; */
`;
const Img = styled.img`
  margin: 0 15px 15px 0;

  &:nth-child(odd) {
    width: 75px;
    height: 75px;
    overflow: hidden;
    object-fit: cover;
  }
  &:nth-child(even) {
    width: 75px;
    height: 75px;
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
