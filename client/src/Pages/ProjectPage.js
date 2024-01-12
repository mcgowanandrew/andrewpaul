import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AllProjects from '../Components/Projects/AllProjects';

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    fetch('https://node-server-dev-fazc.3.us-1.fl0.io')
      .then((res) => res.json())
      .then((data) => {
        setAllProjects(Object.values(data)[1]);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <BigWrap>
          {allProjects.map((project, index) => (
            <AllProjects project={project} index={index} key={project.id} />
          ))}
    </BigWrap>
  );
};

const BigWrap = styled.div`
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
