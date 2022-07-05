import React, { useEffect } from 'react';
import mixitup from 'mixitup';
import Image from 'next/image';
import {
  SectionSubtitle,
  SectionTitle,
  Section,
} from '../../styles/GlobalComponents';
import {
  ProjectsNav,
  ProjectItem,
  ProjectsContainer,
  ProjectContent,
  ProjectSubtitle,
  ProjectTitle,
  ProjectData,
  ProjectButton,
  TechnologiesGrid,
  TechnologiesItem,
  ProjectCard,
  ProjectDescription,
  ProjectButtonsContainer,
  ProjectImageWrapper,
  TechnologiesItemText,
} from './ProjectsStyles';
import { githubProjects } from '../../constants/constants';

function Projects() {
  let projectNavLinks;
  useEffect(() => {
  }, []);
  function activeProjectLink() {
    if (projectNavLinks) {
      projectNavLinks.forEach((link) => {
        link.classList.remove('activeProjectNavLink');
      });
      // eslint-disable-next-line react/no-this-in-sfc
      this.classList.add('activeProjectNavLink');
    }
  }
  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const mixer = mixitup('.containerEl', {
      selectors: {
        target: '.content',
      },
      animation: {
        duration: 400,
      },
    });
  }, []);
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    projectNavLinks = document.querySelectorAll('[data-filter]');
    projectNavLinks.forEach((link) => {
      link.addEventListener('click', activeProjectLink);
    });
    return () => {
      projectNavLinks.forEach((link) => link.removeEventListener('click', activeProjectLink));
    };
  }, [projectNavLinks]);

  return (
    <Section id="projects">
      <SectionSubtitle>My recent projects</SectionSubtitle>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsNav>
        <ProjectItem data-filter="all" className="activeProjectNavLink">
          All
        </ProjectItem>
        <ProjectItem data-filter=".frontend">Front End</ProjectItem>
        <ProjectItem data-filter=".backend">Back End</ProjectItem>
        <ProjectItem data-filter=".fullstack">Full Stack</ProjectItem>
      </ProjectsNav>
      <ProjectsContainer className="bodyGrid containerEl">
        {githubProjects.map((project) => (
          <ProjectContent key={project.title} className={`mix glassMorphism content ${project.projectType.split(' ').join('').toLowerCase()}`}>
            <ProjectCard>
              <ProjectImageWrapper>

                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  layout={project.image.layout}
                  width={project.image.width}
                  height={project.image.height}
                />
              </ProjectImageWrapper>
              <ProjectData>
                <ProjectSubtitle>{project.projectType}</ProjectSubtitle>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <TechnologiesGrid>
                  {project.tags.map((tag) => (
                    <TechnologiesItem TechnologiesItem key={tag.link} href={tag.link} target="_blank">
                      <TechnologiesItemText>{tag.name}</TechnologiesItemText>
                    </TechnologiesItem>
                  ))}
                </TechnologiesGrid>
              </ProjectData>
              <ProjectButtonsContainer>
                <ProjectButton noMarginRight href={project.source} target="_blank">Code</ProjectButton>
                <ProjectButton
                  noMarginRight
                  notDeployed={project?.link === ''}
                  href={project?.link === '' ? '#' : project?.link}
                  target="_blank"
                >
                  {project?.link === '' ? 'Not deployed' : 'View Live'}
                </ProjectButton>
              </ProjectButtonsContainer>
            </ProjectCard>
          </ProjectContent>
        ))}
      </ProjectsContainer>
    </Section>
  );
}
export default Projects;
