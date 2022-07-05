import React from 'react';

import { List, ListItem, ListParagraph } from './TechnologiesStyles';
import {
  Section,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents/index';
import { TechnologiesAndTools } from '../../constants/constants';

export default function Technologies() {
  return (
    <Section id="tech">
      <SectionTitle>Technologies & Tools</SectionTitle>
      <div className="bodyContainer">
        <SectionText
          style={{ textAlign: 'left', margin: '0 auto', color: '#3E0E12' }}
        >
          This section contains all the technologies , programming languages and tools
          that I have learnt until now. I am constantly learning, therefore I may
          update this section more often.
        </SectionText>
      </div>
      <List>
        {
          TechnologiesAndTools.map((technologie) => (
            <ListItem key={technologie.Name}>
              {technologie.Badge}
              <ListParagraph>{technologie.Name}</ListParagraph>
            </ListItem>
          ))
        }

      </List>
    </Section>
  );
}
