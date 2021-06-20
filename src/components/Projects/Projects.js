import React from "react";
import styled from "styled-components";
import { projects } from "../../constants/constants";
import {
  SectionSubtitle,
  SectionTitle,
  Section,
} from "../../styles/GlobalComponents";
import {
  ProjectsNav,
  ProjectItem,
  ProjectsContainer,
  ProjectImageLink,
  ProjectImage,
  ProjectContent,
  ProjectSubtitle,
  ProjectTitle,
  ProjectData,
  ProjectButton,
} from "./ProjectsStyles";
const Projects = (props) => (
  <Section id="projects">
    <SectionSubtitle>My recent projects</SectionSubtitle>
    <SectionTitle>Projects</SectionTitle>
    <ProjectsNav>
      <ProjectItem>All</ProjectItem>
      <ProjectItem>Front End</ProjectItem>
      <ProjectItem>Back End</ProjectItem>
      <ProjectItem>UI</ProjectItem>
    </ProjectsNav>
    <ProjectsContainer className="bodyGrid">
      <ProjectContent>
        <ProjectImageLink>
          <ProjectImage
            src="/images/adidas-shoes-mockups.jpg"
            alt="Website for Adidas Shoes"
          />
          <ProjectData>
            <ProjectSubtitle>Front End</ProjectSubtitle>
            <ProjectTitle>Latest Front End Work Made </ProjectTitle>
            <ProjectButton>View Live</ProjectButton>
            <ProjectButton>View Code</ProjectButton>
          </ProjectData>
        </ProjectImageLink>
      </ProjectContent>
      <ProjectContent>
        <ProjectImageLink>
          <ProjectImage
            src="/images/adidas-shoes-mockups.jpg"
            alt="Website for Adidas Shoes"
          />
          <ProjectData>
            <ProjectSubtitle>Back End</ProjectSubtitle>
            <ProjectTitle>Latest Front End Work Made </ProjectTitle>
            <ProjectButton>View Live</ProjectButton>
            <ProjectButton>View Code</ProjectButton>
          </ProjectData>
        </ProjectImageLink>
      </ProjectContent>
      <ProjectContent>
        <ProjectImageLink>
          <ProjectImage
            src="/images/adidas-shoes-mockups.jpg"
            alt="Website for Adidas Shoes"
          />
          <ProjectData>
            <ProjectSubtitle>UI</ProjectSubtitle>
            <ProjectTitle>Latest Front End Work Made </ProjectTitle>
            <ProjectButton>View Live</ProjectButton>
            <ProjectButton>View Code</ProjectButton>
          </ProjectData>
        </ProjectImageLink>
      </ProjectContent>
    </ProjectsContainer>
  </Section>
);
export default Projects;
