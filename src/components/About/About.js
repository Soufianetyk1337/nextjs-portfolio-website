import React from 'react';
import {
  Section,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  Container,
  AboutContainer,
  AboutData,
  AboutDescription,
  AboutSpan,
} from './AboutStyles';

function About() {
  return (
    <Section id="about">
      <Container className="bodyContainer bodyGrid">
        <SectionTitle>About Me</SectionTitle>
        <AboutContainer className="bodyGrid">
          <AboutData className="bodyContainer">
            <AboutDescription>
              <AboutSpan>
                Hello 👋, I am
                {' '}
                <br />
              </AboutSpan>
              Full Stack Developer From Morocco ,I like to build 👨🏼‍💻 high-quality
              applications for the web. I have been learning more and
              implementing them into building projects on my own to improve my
              knowledge and understanding on the technologies I use. Nowadays, I
              am learning React Advanced Patterns and Features.
            </AboutDescription>
          </AboutData>
        </AboutContainer>
      </Container>
    </Section>
  );
}

export default About;
