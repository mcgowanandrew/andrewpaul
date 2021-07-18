import React from "react";
import img from "../assets/bg.jpg";
// import arbusData from "./Projects/arbusData.json";
import styled from "styled-components";

const Homepage = () => {
  // const arbusHeader = arbusData.filter((obj) => {
  //   return obj.img;
  // })[Math.floor(Math.random() * arbusData.length)];

  return <Div src={img}></Div>;
};
const Div = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default Homepage;
