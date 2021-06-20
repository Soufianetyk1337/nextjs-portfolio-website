import React from "react";
import { BodyContainer } from "../../styles/GlobalComponents/index.js";
import Nav from "../Nav/Nav";
import { HeaderContainer } from "./HeaderStyles.js";
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 200) header.classList.add("scrollHeader");
  else header.classList.remove("scrollHeader");
}
const Header = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = React.useState(false);
  // React.useLayoutEffect(() => {
  //   let headerClasses = document.getElementById("header").classList;
  //   headerClasses = Array.prototype.slice.call(headerClasses, 0);
  //   setIsHeaderScrolled(headerClasses.includes("scrollHeader"));
  //   window.addEventListener("scroll", scrollHeader);
  // }, [isHeaderScrolled]);
  return (
    <HeaderContainer id="header" className="">
      <BodyContainer>
        <Nav isHeaderScrolled={isHeaderScrolled}></Nav>
      </BodyContainer>
    </HeaderContainer>
  );
};
export default Header;
