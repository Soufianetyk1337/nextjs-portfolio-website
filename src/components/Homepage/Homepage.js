import React from "react";
import {
  BodyContainer,
  BodyGrid,
  Section,
} from "../../styles/GlobalComponents";
import {
  HomepageContainer,
  HomepageData,
  HomepageGreeting,
  HomepageName,
  HomepageProfession,
  HomepageButton,
  HomepageSocialIcon,
  HomepageSocialContainer,
  SocialIcon,
} from "./HomepageStyles";

function Homepage() {
  return (
    <Section id="home">
      <HomepageContainer className="bodyContainer bodyGrid">
        <HomepageData>
          <HomepageGreeting>Hello 👋,My name is</HomepageGreeting>
          <HomepageName>Soufiane Zaidan</HomepageName>
          <HomepageProfession>Full Stack Developer</HomepageProfession>
          <HomepageButton href="https://drive.google.com" className="button">
            View CV
          </HomepageButton>
        </HomepageData>
        <HomepageSocialContainer>
          <HomepageSocialIcon>
            <SocialIcon className="bx bxl-github"></SocialIcon>
          </HomepageSocialIcon>

          <HomepageSocialIcon>
            <SocialIcon className="bx bxl-twitter"></SocialIcon>
          </HomepageSocialIcon>

          <HomepageSocialIcon>
            <SocialIcon className="bx bxl-linkedin"></SocialIcon>
          </HomepageSocialIcon>
        </HomepageSocialContainer>
      </HomepageContainer>
    </Section>
  );
}

export default Homepage;
