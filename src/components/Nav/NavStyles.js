const { default: styled } = require("styled-components");

export const Navbar = styled.nav`
  height: ${(props) => props.theme.height.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
