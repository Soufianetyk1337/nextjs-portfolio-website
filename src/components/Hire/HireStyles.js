import styled from "styled-components";

// ${(props) => props.theme.heights.headerHeight}
export const HireContainer = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${(props) => props.theme.colors.firstColorDark};
  color: ${(props) => props.theme.colors.firstColorLighter};
  border-radius: 0.5rem;
  text-align: center;
`;
export const HireData = styled.div``;
export const HireIcon = styled.i`
  margin-bottom: ${(props) => props.theme.margins.mb1};
  font-size: 3.5rem;
`;
export const HireTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.margins.mb1};
  font-size: 1.5rem;
`;
export const HireButton = styled.a`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.firstColorDark};
  color: ${(props) => props.theme.colors.firstColorLighter};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.firstColorLight};
  }
`;
export const HireDescription = styled.p`
  margin-bottom: ${(props) => props.theme.margins.mb4};
`;
