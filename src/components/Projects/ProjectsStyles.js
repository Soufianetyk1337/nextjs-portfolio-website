import styled, { keyframes } from "styled-components";

export const ProjectsNav = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.margins.mb3};
`;
export const ProjectItem = styled.span`
  margin: 0 ${(props) => props.theme.margins.mb2};
  cursor: pointer;
`;
export const ProjectsContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 4.5rem 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const ProjectData = styled.div`
  padding: 1.5rem;
`;
export const ProjectContent = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(174, 190, 250, 0.3);
  &:hover {
    box-shadow: 0 6px 8px rgba(174, 190, 250, 0.3);
  }
  &:hover ${ProjectImage} {
    transform: scale(1.02);
  }
`;
export const ProjectImage = styled.img`
  height: auto;
  width: 100%;
  transition: 0.4s;
`;
export const ProjectImageLink = styled.a``;
export const ProjectButton = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.firstColorDark};
  color: ${(props) => props.theme.colors.firstColorLighter};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;
  margin-right: 2rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.firstColorLight};
  }
`;
export const ProjectSubtitle = styled.span`
  font-size: ${(props) => props.theme.typography.smallFontSize};
  color: ${(props) => props.theme.colors.firstColorLight};
`;
export const ProjectTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.h3FontSize};
  color: ${(props) => props.theme.colors.firstColor};
  margin: ${(props) => props.theme.margins.mb2} 0;
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  margin: 1rem 0;
`;
export const TechnologiesItem = styled.a`
  font-weight: 500;
  font-size: 1rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: baseline;
  display: inline-flex;
  border-radius: 9999px;
  background-color: rgba(247, 247, 247, 1);
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:hover {
    box-shadow: 10px 10px 5px 0px rgba(92, 92, 92, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(92, 92, 92, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(92, 92, 92, 0.75);
  }
`;
export const TechnologieImage = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  align-self: center;
  padding-right: 0.5rem;
  transform: rotate(360deg);
`;

export const ProjectLive = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const pulse = keyframes`
from {box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);}
to {box-shadow: 0 0 0 20px red;}
`;
export const ProjectLiveIcon = styled.div`
  & > svg {
    animation: ${pulse} 1.2s ease-in-out;
    animation-iteration-count: infinite;
    font-size: 2rem;
    color: red;
  }
`;
