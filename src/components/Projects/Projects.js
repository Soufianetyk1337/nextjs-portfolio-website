import React from "react";
import styled from "styled-components";
import { projects } from "../../constants/constants";
const Projects = (props) => (
  <Section nopadding>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, index) => (
        <div>
          {project.title}
          <br />
          {project.description}
        </div>
      ))}
    </GridContainer>
  </Section>
);
export default Projects;

const Section = styled.div``;
const SectionDivider = styled.div``;
const SectionTitle = styled.div``;
const GridContainer = styled.div``;
