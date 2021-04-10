import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Logo from 'assets/illustration/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';

const StyledWrapper = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
`;

const LinksWrapper = styled.div`
    padding-bottom: 10px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 820px) {
        margin: auto;
    }
`;
const StyledLogo = styled(NavLink)`
    display: block;
    background-image: url(${Logo});
    width: 226px;
    height: 103px;
    margin-left: 40px;
    @media only screen and (max-width: 820px) {
        display: none;
    }
`;
const StyledLi = styled.li`
    list-style-type: none;
`;
const StyledHeading = styled(Heading)`
    margin: 0 29px;
    font-size: ${({theme}) => theme.fontSize.l};
    font-weight: ${({theme}) => theme.bold};
    color: ${({theme}) => theme.black};
    text-decoration: none;
    @media only screen and (max-width: 550px) {
        font-size: 20px;
    }

    &.active{
        color: ${({theme}) => theme.green};
    }
`;
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
        {/* <Hambkurger /> */}
    </>
);

export default Navbar;