import React from "react";
import {
  Section,
  SectionSubtitle,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Container,
  AboutContainer,
  AboutData,
  AboutDescription,
  AboutSpan,
} from "./AboutStyles";

function About() {
  return (
    <Section id="about">
      <Container className="bodyContainer bodyGrid">
        <SectionSubtitle>My history</SectionSubtitle>
        <SectionTitle>About Me</SectionTitle>
        <AboutContainer className="bodyGrid">
          <AboutData className="bodyGrid">
            <AboutDescription>
              <AboutSpan>
                Hello, I am <br />
              </AboutSpan>
              Full Stack Developer, I am passionate about creating and
              developing web applications.
            </AboutDescription>
          </AboutData>
        </AboutContainer>
      </Container>
    </Section>
  );
}

export default About;
