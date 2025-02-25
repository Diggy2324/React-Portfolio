// Project.jsx
import React from 'react';
import styled from 'styled-components';
import Project from './project'; // Import Project component

const ProjectContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
`;

function Project({ title, description, imageUrl }) {
  return (
    <ProjectContainer>
      {imageUrl && <ProjectImage src={imageUrl} alt={title} />}
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectContainer>
  );
}

export default Project;