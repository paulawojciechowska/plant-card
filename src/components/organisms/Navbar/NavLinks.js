import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoutIcon from 'assets/icons/logout.svg';
import { LinksWrapper, StyledLi, StyledHeading } from './NavLink.styles';

const NavLinks = ({ isOpenNav, closeNav }) => (
  <LinksWrapper>
    <StyledLi>
      <StyledHeading exact as={NavLink} to="/" onClick={() => isOpenNav && closeNav(false)} activeclass="active">
        Home
      </StyledHeading>
    </StyledLi>
    <StyledLi>
      <StyledHeading as={NavLink} to="/cards" onClick={() => isOpenNav && closeNav(false)} activeclass="active">
        Cards
      </StyledHeading>
    </StyledLi>
    <StyledLi>
      <StyledHeading as={NavLink} to="/gallery" onClick={() => isOpenNav && closeNav(false)} activeclass="active">
        Gallery
      </StyledHeading>
    </StyledLi>
    <StyledLi>
      {isOpenNav ? (
        <StyledHeading exact as={NavLink} to="/" onClick={() => isOpenNav && closeNav(false)} activeclass="active">
          Log out
        </StyledHeading>
      ) : (
        <ButtonIcon logout as={NavLink} to="/" icon={logoutIcon} />
      )}
    </StyledLi>
  </LinksWrapper>
);

export default NavLinks;
