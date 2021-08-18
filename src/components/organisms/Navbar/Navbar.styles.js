import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'assets/illustration/logo.svg';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
`;

export const LinksWrapper = styled.div`
  padding-bottom: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 820px) {
    margin: auto;
  }
`;
export const StyledLogo = styled(NavLink)`
  display: block;
  background-image: url(${Logo});
  width: 226px;
  height: 103px;
  margin-left: 40px;
  @media only screen and (max-width: 820px) {
    display: none;
  }
`;
export const StyledLi = styled.li`
  list-style-type: none;
`;
export const StyledHeading = styled(Heading)`
  margin: 0 29px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  @media only screen and (max-width: 550px) {
    font-size: 20px;
  }

  &.active {
    color: ${({ theme }) => theme.green};
  }
`;
