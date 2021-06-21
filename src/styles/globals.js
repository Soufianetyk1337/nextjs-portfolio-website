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
    font-size:18px;
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
  @media ${(props) => props.theme.breakpoints.md} {
    body{
        margin:0;
    }
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
  #home{
    overflow:hidden;
    background-color:#000;
  }
  .bodyContainer{
    max-width: 1024px;
  width: calc(100% - 2rem);
  margin-left: ${(props) => props.theme.margins.mb2};
  margin-right: ${(props) => props.theme.margins.mb2};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  margin-left:auto;
  margin-right:auto;
  }
  .bodyGrid{
     display: grid;
  grid-gap: 1.5rem;
  }
  .activePtojectNavLink{
    color:${(props) => props.theme.colors.firstColorDark};;
    font-weight:${(props) => props.theme.weights.fontSemiBold};;
  }
`;

export default GlobalStyles;
