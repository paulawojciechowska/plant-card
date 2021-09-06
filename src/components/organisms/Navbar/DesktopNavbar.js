import React from 'react';
import NavLinks from './NavLinks';
import { StyledWrapper, StyledLogo } from './Navbar.styles';

const DesktopNavbar = () => (
  <StyledWrapper>
    <StyledLogo to="/" />
    <NavLinks />
  </StyledWrapper>
);

export default DesktopNavbar;
