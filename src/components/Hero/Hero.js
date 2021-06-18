import React from "react";
import styled from "styled-components";
import { Section } from "../../styles/GlobalComponents";
const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>I'm a Jr. Full Stack Developer</SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);
export default Hero;

const LeftSection = styled.div``;
const SectionTitle = styled.div``;
const SectionText = styled.div``;
const Button = styled.div``;
