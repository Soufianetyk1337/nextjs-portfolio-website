const { default: styled } = require('styled-components');

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,200px);;
  grid-gap: 25px;
  height: 100%;
  padding: 60px 40px 0;
  justify-content: center;
   
`;
export const ListContainer = styled.div``;
export const ListItem = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  width:200px;
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
