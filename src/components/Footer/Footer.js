import React from 'react';
import { Section } from '../../styles/GlobalComponents';
import {
  FooterWrapper,
  FooterDescription,
  FooterDesc,
  FooterTitle,
  FooterSocial,
  FooterLink,
  FooterIcon,
  FooterCopyright,
} from './FooterStyles';

function Footer() {
  const currentFullYear = new Date().getFullYear();
  return (
    <Section id="footer" lastSection>
      <FooterWrapper>
        <FooterDescription className="bodyContainer">
          <FooterTitle>Seizen</FooterTitle>
          <FooterDesc>
            I am Soufiane Zaidan and this is my personal website, consult me here.
            {' '}
          </FooterDesc>
          <FooterSocial>

            <FooterLink
              href="mailto:sz.fanel@gmail.com"
              target="_blank"
              aria-label="LinkedIn Contact"
            >
              <FooterIcon className="bx bx-envelope" />
            </FooterLink>

            <FooterLink
              href="https://www.github.com/Soufianetyk1337"
              target="_blank"
              aria-label="LinkedIn Contact"
            >
              <FooterIcon className="bx bxl-github" />
            </FooterLink>
            <FooterLink
              href="https://twitter.com/SoufianeZZ7"
              target="_blank"
              aria-label="Twitter Contact"
            >
              <FooterIcon className="bx bxl-twitter" />
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn Contact"
            >
              <FooterIcon className="bx bxl-linkedin" />
            </FooterLink>
          </FooterSocial>
          <FooterCopyright>
            &#169;
            {' '}
            {currentFullYear}
            {' '}
            Seizen. All right reserved
          </FooterCopyright>
        </FooterDescription>
      </FooterWrapper>
    </Section>

  );
}

export default Footer;
