import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.firstColorDark};
  color: ${(props) => props.theme.colors.firstColorLighter};
  text-align: center;
  padding: 3rem 0;
`;
export const FooterDescription = styled.div``;
export const FooterSocial = styled.div`
  margin-bottom: ${(props) => props.theme.margins.mb6};
`;
export const FooterLink = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.firstColorLighter};
  margin: 0 ${(props) => props.theme.margins.mb1};
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.firstColorLight};
  }
`;
export const FooterTitle = styled.h1`
  font-size: ${(props) => props.theme.typography.h1FontSize};
  margin-bottom: ${(props) => props.theme.margins.mb1};
  font-weight: ${(props) => props.theme.weights.fontSemiBold};
`;
export const FooterDesc = styled.p`
  margin-bottom: ${(props) => props.theme.margins.mb3};
`;
export const FooterCopyright = styled.p`
  font-size: ${(props) => props.theme.typography.smallerFontSize};
  color: ${(props) => props.theme.colors.firstColorLight};
`;
export const FooterIcon = styled.i``;
