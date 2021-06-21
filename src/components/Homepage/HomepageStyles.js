import styled from "styled-components";

export const HomepageContainer = styled.div`
  position: relative;
  height: calc(100vh - ${(props) => props.theme.heights.headerHeight});
  grid-template-rows: repeat(2, max-content);
  align-content: space-around;
  row-gap: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 100vh;
  }
`;
export const HomepageData = styled.div`
  border-left: 4px solid ${(props) => props.theme.colors.firstColorLighter};
  color: ${(props) => props.theme.colors.firstColorLighter};
  padding-left: 1.5rem;
  z-index: ${(props) => props.theme.zindex.ztooltip};
`;
export const HomepageGreeting = styled.span`
  display: block;
  font-weight: ${(props) => props.theme.weights.fontBold};
  font-size: 0.813rem;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.25rem;
  }
`;
export const HomepageName = styled.h1`
  font-size: ${(props) => props.theme.typography.biggestFontSize};
`;
export const HomepageProfession = styled.span`
  display: block;
  font-weight: ${(props) => props.theme.weights.fontBold};
  font-size: 0.938rem;
  margin-bottom: ${(props) => props.theme.margins.mb3};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
`;
export const HomepageButton = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.firstColor};
  color: ${(props) => props.theme.colors.firstColorLighter};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;
`;
export const HomepageSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    align-items: center;
  }
`;
export const HomepageSocialIcon = styled.a`
  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: ${(props) => props.theme.margins.mb4};
    margin-bottom: 0;
  }
`;
export const SocialIcon = styled.i`
  width: max-content;
  font-size: 1.3rem;
  margin-bottom: ${(props) => props.theme.margins.mb2};
  color: ${(props) => props.theme.colors.firstColorLighter};
  &:hover {
    color: ${(props) => props.theme.colors.firstColorLight};
    cursor: pointer;
  }
`;
