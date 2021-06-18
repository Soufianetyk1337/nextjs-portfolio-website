import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
  max-width: 1024px;
  padding: 1rem 0;
`;
export const Div1 = styled.div``;
export const Div2 = styled.div`
  display: flex;
  & > li {
    margin-left: 1.5rem;
  }
`;
export const Div3 = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;
export const SocialIcons = styled.div`
  margin-left: 1.5rem;
  transition: 0.4s;
  &:hover {
    background-color: #f7b42c;
    background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);
    transform: scale(1.1);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const NavLink = styled.a``;
export const Span = styled.span`
  font-size: 2rem;
`;
