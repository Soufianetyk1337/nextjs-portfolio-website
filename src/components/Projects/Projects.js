import React from "react";
import styled from "styled-components";
import { projects } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
  GridContainer,
  BlogCard,
  ExternalLink,
  UtilityList,
  Hr,
  HeaderThree,
  TitleContent,
  Img,
  CardInfo,
  TagList,
  Tag,
} from "./ProjectsStyles";
const Projects = (props) => (
  <Section nopadding>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, index) => (
        <BlogCard>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree>
              {project.title}
              <Hr />
            </HeaderThree>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack Used:</TitleContent>
            <TagList>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLink href="https://github.com">Code</ExternalLink>
            <ExternalLink href="https://vercel.com">Live</ExternalLink>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);
export default Projects;
