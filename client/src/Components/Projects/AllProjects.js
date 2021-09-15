import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const AllProjects = ({ project }) => {
  let history = useHistory();

  const handleProjectClick = (e) => {
    e.preventDefault();
    history.push(`/project/${project.title}`);
  };

  return (
    <BigWrap>
      <ProjectWrap>
        <ImgWrap>
          <Img src={project.headerImg} alt={project.title} key={project.id} />
          <Hover onClick={handleProjectClick}>
            <Title>{project.title}</Title>
          </Hover>
        </ImgWrap>
      </ProjectWrap>
    </BigWrap>
  );
};

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const Hover = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: grid;
  place-content: center;
  background: rgba(3, 2, 5, 0.7);
  height: 100%;
  width: 100%;
  z-index: 2;
  opacity: 0;
  &:hover {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    cursor: pointer;
  }
`;
const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const Img = styled.img`
  position: relative;
  z-index: 1;
  max-width: 100%;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;
const ProjectWrap = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 630px;
  display: flex;
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

export default AllProjects;
