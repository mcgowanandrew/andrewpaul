import React from "react";
import styled from "styled-components";
import data from "./arbusdata.json";
console.log("data", data);

const Arbus = () => {
  return (
    <BigWrap>
      {data.map((arbus) => {
        return (
          
            <Img src={arbus.img} />
          
        );
      })}
    </BigWrap>
  );
};

const Img = styled.img`
  width: 600px;
  height: auto;
`;
const BigWrap = styled.div`
  width: 100vw;
  height: 100vh;
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
