import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import {
  Section,
} from '../../styles/GlobalComponents';
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
} from './HomepageStyles';
import particlesJConfig from '../../../particlesjs-config.json';

function Homepage() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Section id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Particles
          id="tsparticles"
          height="100%"
          width="100%"
          init={particlesInit}
          options={particlesJConfig}
        />
      </div>
      <HomepageContainer className="bodyContainer bodyGrid">
        <HomepageData>
          <HomepageGreeting>Hello 👋,My name is</HomepageGreeting>
          <HomepageName>Soufiane Zaidan</HomepageName>
          <HomepageProfession>Full Stack Developer</HomepageProfession>
          <HomepageButton href="https://drive.google.com" className="button" target="_blank">
            View Resume
          </HomepageButton>
        </HomepageData>
        <HomepageSocialContainer>
          <HomepageSocialIcon href="mailto:sz.fanel@gmail.com" target="_blank" aria-label="Gmail Contant">
            <SocialIcon className="bx bx-envelope" />
          </HomepageSocialIcon>
          <HomepageSocialIcon
            href="https://www.github.com/Soufianetyk1337"
            target="_blank"
            aria-label="GitHub Account"
          >
            <SocialIcon className="bx bxl-github" />
          </HomepageSocialIcon>
          <HomepageSocialIcon
            href="https://twitter.com/SoufianeZZ7"
            target="_blank"
            aria-label="Twitter Contact"
          >
            <SocialIcon className="bx bxl-twitter" />
          </HomepageSocialIcon>
          <HomepageSocialIcon
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn Contact"
          >
            <SocialIcon className="bx bxl-linkedin" />
          </HomepageSocialIcon>
        </HomepageSocialContainer>
      </HomepageContainer>
    </Section>
  );
}

export default Homepage;
