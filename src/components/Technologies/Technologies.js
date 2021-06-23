import React from "react";
import { List, ListItem, ListParagraph } from "./TechnologiesStyles";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiNodejs,
  DiMongodb,
  DiAws,
  DiLaravel,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiDocker,
} from "react-icons/di";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents/index";
const Technologies = (props) => (
  <div>
    <Section id="tech">
      <SectionTitle>Technologies</SectionTitle>
      <SectionText
        style={{ textAlign: "center", margin: "0 auto", color: "#3E0E12" }}
      >
        This section contains all the technologies and programming languages
        that I have learnt until now. I am constantly learning, therefore I may
        update this section more often.
      </SectionText>
      <List>
        <ListItem>
          <DiHtml5
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>HTML5</ListParagraph>
        </ListItem>
        <ListItem>
          <DiCss3
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>CSS3</ListParagraph>
        </ListItem>
        <ListItem>
          <DiJavascript
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>JavaScript</ListParagraph>
        </ListItem>
        <ListItem>
          <DiReact
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>ReactJS</ListParagraph>
        </ListItem>
        <ListItem>
          <DiFirebase
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>Firebase</ListParagraph>
        </ListItem>
        <ListItem>
          <DiAws
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>AWS</ListParagraph>
        </ListItem>
        <ListItem>
          <DiNodejs
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>NodeJS</ListParagraph>
        </ListItem>
        <ListItem>
          <DiDocker
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>Docker</ListParagraph>
        </ListItem>
        <ListItem>
          <DiZend
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>Zend</ListParagraph>
        </ListItem>
        <ListItem>
          <DiLaravel
            size="3rem"
            style={{
              background: "#fff",
              color: "#020061",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          />
          <ListParagraph>Laravel</ListParagraph>
        </ListItem>
      </List>
    </Section>
  </div>
);
export default Technologies;
