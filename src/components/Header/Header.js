import React from 'react';
import { BodyContainer } from '../../styles/GlobalComponents';
import Nav from '../Nav/Nav';
import { HeaderContainer } from './HeaderStyles';

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [isHeaderScrolled, setIsHeaderScrolled] = React.useState(false);
  return (
    <HeaderContainer id="header" className="">
      <BodyContainer>
        <Nav isHeaderScrolled={isHeaderScrolled} />
      </BodyContainer>
    </HeaderContainer>
  );
}
export default Header;
