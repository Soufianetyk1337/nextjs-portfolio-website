const { default: styled } = require('styled-components');

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 200px));
  grid-gap: 25px;
  height: 100%;
  padding: 60px 40px 0;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, minmax(200px, 200px));
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(3, minmax(200px, 200px));
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(4, minmax(200px, 200px));
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: repeat(5, minmax(200px, 200px));
  }
`;
export const ListContainer = styled.div``;
export const ListItem = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 3px;
  background: hsla(0, 0%, 47.8%, 0.12);
  transition: 0.2s ease-in-out;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.068);
  &:hover {
    transform: translateY(-0.5rem);
  }
`;
export const ListParagraph = styled.div`
  display: inline-flex;
  align-self: center;
  font-size: 18px;
  font-weight: 600;
  padding: 18px 20px;
  letter-spacing: -0.9px;
  color: #000;
`;
export const ListTitle = styled.div``;
