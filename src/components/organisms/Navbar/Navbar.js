import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoutIcon from 'assets/icons/logout.svg';
import { StyledWrapper, StyledLogo, LinksWrapper, StyledLi, StyledHeading } from './Navbar.styles';

const Navbar = () => (
    <>
        <StyledWrapper>
            <StyledLogo to="/" />
        <LinksWrapper>
            <StyledLi>
                <StyledHeading exact as={NavLink} to="/" activeclass="active">Home</StyledHeading>
            </StyledLi>
            <StyledLi>
                <StyledHeading as={NavLink} to="/cards" activeclass="active">Cards</StyledHeading>
            </StyledLi>
            <StyledLi>
                <StyledHeading as={NavLink} to="/gallery" activeclass="active">Gallery</StyledHeading>
            </StyledLi>
            <StyledLi>
                <ButtonIcon logout as={NavLink} to="/" icon={logoutIcon} />
            </StyledLi>
        </LinksWrapper>
        </StyledWrapper>
    </>
);

export default Navbar;