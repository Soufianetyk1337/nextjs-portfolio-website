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
    margin:${(props) => props.theme.heights.headerHeight} 0 0 0;
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
  .activeLink{
    position:relative;
  }
  .activeLink::after{
    content:'';
    position:absolute;
    width:65%;
    bottom:-.7rem;
    left:0;
    height:3px;
    background-color:${(props) => props.theme.colors.firstColorLight};
  }
  .scrollHeader{
    background-color:${(props) => props.theme.colors.firstColorLighter};
    box-shadow:0 2px 4px rgba(0,0,0,.1);
  }
`;

export default GlobalStyles;
