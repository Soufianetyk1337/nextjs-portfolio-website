import React from "react";
import {
  FooterWrapper,
  FooterDescription,
  FooterDesc,
  FooterTitle,
  FooterSocial,
  FooterLink,
  FooterIcon,
  FooterCopyright,
} from "./FooterStyles";
const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <FooterWrapper id="footer">
      <FooterDescription className="bodyContainer">
        <FooterTitle>Seizen</FooterTitle>
        <FooterDesc>
          I am Soufiane Zaidan and this is my personal website, consult me here.{" "}
        </FooterDesc>
        <FooterSocial>
          <FooterLink href="#">
            <FooterIcon className="bx bxl-github"></FooterIcon>
          </FooterLink>
          <FooterLink href="#">
            <FooterIcon className="bx bxl-twitter"></FooterIcon>
          </FooterLink>
          <FooterLink href="#">
            <FooterIcon className="bx bxl-linkedin"></FooterIcon>
          </FooterLink>
        </FooterSocial>
        <FooterCopyright>
          &#169; {currentFullYear} Seizen. All right reserved
        </FooterCopyright>
      </FooterDescription>
    </FooterWrapper>
  );
};

export default Footer;
