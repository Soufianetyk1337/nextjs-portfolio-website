import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${
    "" /* @media screen and (max-width:768px){
    :root{
    --biggest-font-size:4.5rem;
    --h1-font-size:2.25rem;
    --h2-font-size:1.5rem;
    --h3-font-size:1.25rem;
    --normal-font-size:1rem;
    --small-font-size:.875rem;
    --smaller-font-size:.813rem;
    }
  } */
  }
  * {
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;

  }
  body {
    margin:${(props) => props.theme.height.headerHeight} 0 0 0;
    font-family:${(props) => props.theme.typography.bodyFont};
    font-size:${(props) => props.theme.typography.normalFontSize};
    font-weight:${(props) => props.theme.typography.fontMedium};
    background-color:${(props) => props.theme.colors.firstColorLighter};
    line-height:1.6;
    color:${(props) => props.theme.colors.textColor}
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  h2,h3{
    font-weight:${(props) => props.theme.typography.fontSemiBold};
  }
  a {
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  img{
    max-width:100%;
    height:auto;
    display:block;
  }
  
`;

export default GlobalStyles;
