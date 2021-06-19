import React from "react";
import Link from "next/link";
import { Navbar } from "./NavStyles";
const Nav = (props) => (
  <Navbar>
    <a href="/" className="nav__logo">
      Seizen
    </a>
    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="https://google.com" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link href="https://google.com" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link href="https://google.com" className="nav__link">
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link href="https://google.com" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <div className="nav__toggle" id="nav-toggle">
      <i className="bx bx-menu"></i>
    </div>
  </Navbar>
);
export default Nav;
