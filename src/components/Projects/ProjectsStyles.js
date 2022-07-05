import styled, { keyframes } from 'styled-components';

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
  padding: 1.1rem 0;
`;
export const ProjectButtonsContainer = styled.div`
display: flex;
 justify-content: space-between;
  align-items: end;
  flex-grow:1;
`;
export const ProjectImageWrapper = styled.div``;
export const ProjectDescription = styled.p`
font-size: ${(props) => props.theme.typography.smallFontSize};
  color: ${(props) => props.theme.colors.firstColor};
`;
export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    width: 100%;
    height: 100%;
`;

export const ProjectImage = styled.img`
  height: auto;
  width: 100%;
  transition: 0.4s;
`;
export const ProjectContent = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(174, 190, 250, 0.3);
  &:hover {
    box-shadow: 0 6px 8px rgba(174, 190, 250, 0.3);
  }
  &:hover ${ProjectImage} {
    transform: scale(1.02);
  }
`;

export const ProjectImageLink = styled.a``;
export const ProjectButton = styled.a`
  display: inline-block;
  pointer-events: none;
  background-color: ${(props) => props.theme.colors.firstColorDark};
  color: ${(props) => props.theme.colors.firstColorLighter};
  padding: 0.75rem;
  border-radius: 0.25rem;
  transition: 0.3s;
  margin-right: ${(props) => (props.noMarginRight ? '0' : '2rem')};
  pointer-events: ${(props) => (props.notDeployed ? 'none' : 'fill;')};
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
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  grid-gap: .5rem;
  margin: 1rem 0;
`;
export const TechnologiesItemText = styled.span``;
export const TechnologiesItem = styled.a`
  font-weight: 400;
  font-size: .8rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: baseline;
  width: max-content;
  border-radius: 9999px;
  background-color: rgba(225, 219, 219, 1);
  cursor: pointer;
  color:#3E0E12;
  &:hover {
    transform: scale(1.1);
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
