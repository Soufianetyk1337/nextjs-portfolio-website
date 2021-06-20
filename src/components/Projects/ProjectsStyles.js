import styled from "styled-components";

export const ProjectsNav = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.margins.mb3};
`;
export const ProjectItem = styled.span`
  margin: 0 ${(props) => props.theme.margins.mb2};
  cursor: pointer;
`;
export const ProjectsContainer = styled.div``;
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
export const ProjectButton = styled.a`
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
