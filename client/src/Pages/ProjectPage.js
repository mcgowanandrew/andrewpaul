import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AllProjects from '../Components/Projects/AllProjects';

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch('https://andrew-paul.herokuapp.com/projects')
      .then((res) => res.json())
      .then((data) => {
        const array = Object.values(data)[1];
        setAllProjects(array);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <BigWrap>
        <ProjectWrap>
          {allProjects.map((project, index) => (
            <AllProjects project={project} index={index} key={project.id} />
          ))}
        </ProjectWrap>
    </BigWrap>
  );
};

const ProjectWrap = styled.div`
  margin: 30px auto;
  width: 630px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media (max-width: 636px) {
    width: 300px;
  }
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
