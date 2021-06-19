import React from "react";
import { BodyContainer } from "../../styles/GlobalComponents/index.js";
import Nav from "../Nav/Nav";
import { HeaderContainer } from "./HeaderStyles.js";

const Header = () => (
  <HeaderContainer id="header">
    <BodyContainer>
      <Nav></Nav>
    </BodyContainer>
  </HeaderContainer>
);
export default Header;
