import React from "react";
import {
  HireContainer,
  HireData,
  HireIcon,
  HireTitle,
  HireButton,
  HireDescription,
} from "./HireStyles";
import { Section } from "./../../styles/GlobalComponents";
function Hire() {
  return (
    <Section id="hire" className="hire bodyContainer">
      <HireContainer className="bodyGrid">
        <HireData>
          <HireIcon className="bx bx-chat"></HireIcon>
          <>
            <HireTitle>Project in mind</HireTitle>
            <HireDescription>
              Hire me to carry out the following projects
            </HireDescription>
          </>
          <>
            <HireButton href="#">Hire me</HireButton>
          </>
        </HireData>
      </HireContainer>
    </Section>
  );
}

export default Hire;
