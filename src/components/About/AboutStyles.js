import styled, { keyframes } from 'styled-components';

export const AboutContainer = styled.div``;
export const Container = styled.div``;
export const AboutData = styled.div`
  text-align: center;
`;
export const AboutDescription = styled.p`
text-align: left;
word-break: break-word;
@media ${(props) => props.theme.breakpoints.md} {
    text-align: initial;
  }
`;
const wave = keyframes`
    ${'0%'}{ transform: rotate( 0.0deg) }
     ${'10%'}{ transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
     ${'20%'}{ transform: rotate(-8.0deg) }
     ${'30%'}{ transform: rotate(14.0deg) }
     ${'40%'}{ transform: rotate(-4.0deg) }
     ${'50%'}{ transform: rotate(10.0deg) }
     ${'60%'}{ transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
     ${'100%'}{ transform: rotate( 0.0deg) }
`;
export const AboutSpan = styled.span`
  font-size: ${(props) => props.theme.typography.h2FontSize};
  font-weight: ${(props) => props.theme.weights.fontSemiBold};
  color: ${(props) => props.theme.colors.firstColor};
  & > svg {
    animation-name: ${wave};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
  }
`;

export const Emoji = styled.span``;
