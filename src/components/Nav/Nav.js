import React from "react";
import {
  Navbar,
  NavMenu,
  NavLink,
  NavList,
  NavItem,
  NavToggle,
  NavLogo,
} from "./NavStyles";

// function scrollToSection() {
//   const sections = document.querySelectorAll("section[id]");
//   const scrollY = window.pageYOffset;
//   sections.forEach((section) => {
//     const sectionHeight = section.offsetHeight;
//     const sectionTop = section.offsetTop - 50;
//     const sectionId = section.getAttribute("id");
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("activeLink");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("activeLink");
//     }
//   });
// }
const Nav = (props) => {
  const [toggle, setToggle] = React.useState(false);
  // React.useLayoutEffect(() => {
  //   const navLinks = document.querySelectorAll(".nav__link");
  //   navLinks.forEach((navLink) =>
  //     navLink.addEventListener("click", function () {
  //       setToggle(false);
  //     })
  //   );
  // }, [toggle]);
  // React.useLayoutEffect(() => {
  //   window.addEventListener("scroll", scrollToSection);
  // }, []);

  return (
    <Navbar>
      <NavLogo href="/">Seizen</NavLogo>
      <NavMenu id="nav-menu" toggle={toggle}>
        <NavList>
          <NavItem>
            <NavLink href="#home" className="nav__link activeLink">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" className="nav__link">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects" className="nav__link">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact" className="nav__link">
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </NavMenu>
      <NavToggle
        id="nav-toggle"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i className="bx bx-menu"></i>
      </NavToggle>
    </Navbar>
  );
};
export default Nav;
