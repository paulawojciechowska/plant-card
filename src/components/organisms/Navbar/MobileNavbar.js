import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { StyledLogo } from './Navbar.styles';
import { MobileWrapper, CloseIcon, HamburgerIcon } from './MobileNavbar.styles';

const MobileNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <MobileWrapper>
      <StyledLogo to="/" />
      {openNav ? <CloseIcon onClick={() => setOpenNav(!openNav)} /> : <HamburgerIcon onClick={() => setOpenNav(!openNav)} />}
      {openNav && <NavLinks isOpenNav={openNav} closeNav={setOpenNav} />}
    </MobileWrapper>
  );
};

export default MobileNavbar;
