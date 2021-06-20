const { default: styled } = require("styled-components");

export const Navbar = styled.nav`
  height: ${(props) => props.theme.heights.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const NavMenu = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
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
  }
`;

export const NavItem = styled.li`
  margin-bottom: ${(props) => props.theme.margins.mb3};
`;
export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.firstColorLighter};
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.firstColorLight};
  }
`;
export const NavList = styled.ul``;
export const NavToggle = styled.a`
  color: ${(props) => props.theme.colors.firstColorLighter};
  font-size: 1.3rem;
  cursor: pointer;
`;
export const NavLogo = styled.a`
  color: ${(props) => props.theme.colors.firstColorLighter};
`;
