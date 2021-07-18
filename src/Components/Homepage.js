import React from "react";
import styled from "styled-components";
import background from "../assets/background.json"

const Homepage = () => {
  const backgroundImg = background.filter((obj) => {
    return obj.img;
  })[Math.floor(Math.random()* background.length)];

  return <Div src={backgroundImg.img}></Div>;
};
const Div = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default Homepage;
