import React from "react";
import mixitup from "mixitup";

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
const Projects = (props) => {
  const projectNavLinks = document.querySelectorAll("[data-filter]");
  function activeProjectLink() {
    if (projectNavLinks) {
      projectNavLinks.forEach((link) =>
        link.classList.remove("activePtojectNavLink")
      );
      this.classList.add("activePtojectNavLink");
    }
  }

  React.useEffect(() => {
    var mixer = mixitup(".containerEl", {
      selectors: {
        target: ".content",
      },
      animation: {
        duration: 400,
      },
    });
    projectNavLinks.forEach((link) =>
      link.addEventListener("click", activeProjectLink)
    );
    return () => {
      projectNavLinks.forEach((link) =>
        link.removeEventListener("click", activeProjectLink)
      );
    };
  }, [activeProjectLink]);

  return (
    <Section id="projects">
      <SectionSubtitle>My recent projects</SectionSubtitle>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsNav>
        <ProjectItem data-filter="all" className="activePtojectNavLink">
          All
        </ProjectItem>
        <ProjectItem data-filter=".frontend">Front End</ProjectItem>
        <ProjectItem data-filter=".backend">Back End</ProjectItem>
        <ProjectItem data-filter=".ui">UI</ProjectItem>
      </ProjectsNav>
      <ProjectsContainer className="bodyGrid containerEl">
        <ProjectContent className="mix content frontend">
          <ProjectImageLink>
            <ProjectImage
              src="/images/adidas-shoes-mockups.jpg"
              alt="Website for Adidas Shoes"
            />
            <ProjectData>
              <ProjectSubtitle>Front End</ProjectSubtitle>
              <ProjectTitle>Latest Front End Work Made </ProjectTitle>
              <ProjectButton>View Live</ProjectButton>
              {/* <ProjectButton>View Code</ProjectButton> */}
            </ProjectData>
          </ProjectImageLink>
        </ProjectContent>
        <ProjectContent className="mix content backend">
          <ProjectImageLink>
            <ProjectImage
              src="/images/adidas-shoes-mockups.jpg"
              alt="Website for Adidas Shoes"
            />
            <ProjectData>
              <ProjectSubtitle>Back End</ProjectSubtitle>
              <ProjectTitle>Latest Back End Work Made </ProjectTitle>
              <ProjectButton>View Live</ProjectButton>
              {/* <ProjectButton>View Code</ProjectButton> */}
            </ProjectData>
          </ProjectImageLink>
        </ProjectContent>
        <ProjectContent className="mix content ui">
          <ProjectImageLink>
            <ProjectImage
              src="/images/adidas-shoes-mockups.jpg"
              alt="Website for Adidas Shoes"
            />
            <ProjectData>
              <ProjectSubtitle>UI</ProjectSubtitle>
              <ProjectTitle>Latest UI Work Made </ProjectTitle>
              <ProjectButton>View Live</ProjectButton>
              {/* <ProjectButton>View Code</ProjectButton> */}
            </ProjectData>
          </ProjectImageLink>
        </ProjectContent>
      </ProjectsContainer>
    </Section>
  );
};
export default Projects;
