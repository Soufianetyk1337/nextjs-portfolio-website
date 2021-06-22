const { default: styled } = require("styled-components");

export const Navbar = styled.nav`
  height: ${(props) => props.theme.heights.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    height: calc(${(props) => props.theme.heights.headerHeight} + 1.5rem);
  }
`;

export const NavMenu = styled.div`
  position: fixed;
  top: ${(props) =>
    props.toggle ? props.theme.heights.headerHeight : "-100%"};
  left: 0;
  width: 100%;
  padding-top: 1.5rem;
  text-align: center;
  background-color: #000;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 1rem 1rem;
  @media ${(props) => props.theme.breakpoints.md} {
    /* top: 3rem; */
    position: unset;
    padding-top: 0;
    width: auto;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    margin-left: 0;
    margin-right: 0;
    margin: 0 auto;
  }
`;

export const NavItem = styled.li`
  margin-bottom: ${(props) => props.theme.margins.mb3};
  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${(props) => props.theme.margins.mb5};
    margin-bottom: 0;
    &:last-child {
      margin-right: 1.5rem;
    }
  }
`;
export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.firstColorLighter};
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.firstColorLight};
  }
`;
export const NavList = styled.ul`
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;
export const NavToggle = styled.a`
  color: ${(props) => props.theme.colors.firstColorLighter};
  font-size: 1.3rem;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;
export const NavLogo = styled.a`
  color: ${(props) => props.theme.colors.firstColorLighter};
`;
