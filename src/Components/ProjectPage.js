import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import arbusData from "./Projects/arbusData.json";
import ctData from "./Projects/clownTownData.json";

const Projects = () => {
  let history = useHistory();

  return (
    <BigWrap>
      <ProjectWrap>
        <ImgWrap>
          {arbusData.slice(0, 1).map((arbus,index) => {
            return (
              <Img key={index} src={arbus.img} />
            );
          })}{" "}
          <Hover onClick={() => history.push("/arbus")} >
            <Title> Arbus</Title>
          </Hover>
        </ImgWrap>
        <ImgWrap>
          {ctData.slice(0, 1).map((ct,index) => {
            return (
              <Img key={index} src={ct.img} />
            );
          })}{" "}
          <Hover onClick={() => history.push("/clown-town")} >
            <Title>Clown Town</Title>
          </Hover>
        </ImgWrap>
      </ProjectWrap>
    </BigWrap>
  );
};
const Title = styled.div`
font-size: 24px;
font-weight: 500;
color:#fff;`

const Hover = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  place-content: center;
  background: rgba(000, 000, 000, 0.7);
  height: 100%;
  width: 630px;
  z-index: 10;
  opacity: 0;
  &:hover {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    cursor: pointer;
  }
`;
const ImgWrap = styled.div`
  position: relative;
 width:630px;
 height: auto;
`;

const Img = styled.img`
  position: relative;
  z-index: 1;
  width: 630px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;
const ProjectWrap = styled.div`
 margin:30px auto;
  width: 630px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
`;
const BigWrap = styled.div`
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
export default Projects;