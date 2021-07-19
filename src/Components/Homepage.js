import React from "react";
import img from "../assets/bg.jpg";
import styled from "styled-components";

const Homepage = () => {
  
  return <Div></Div>;
};
const Div = styled.div`
  position: fixed;
top:0;
  width: 100vw;
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
export default Homepage;
