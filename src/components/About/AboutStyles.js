import styled from "styled-components";

export const AboutContainer = styled.div``;
export const Container = styled.div``;
export const AboutData = styled.div`
  text-align: center;
`;
export const AboutDescription = styled.p``;
export const AboutSpan = styled.span`
  font-size: ${(props) => props.theme.typography.h2FontSize};
  font-weight: ${(props) => props.theme.weights.fontSemiBold};
  color: ${(props) => props.theme.colors.firstColor};
`;
