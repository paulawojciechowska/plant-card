import styled from 'styled-components';
import Logo from 'assets/illustration/logo.svg';
import { NavLink } from 'react-router-dom';

export const StyledWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  @media (max-width: 990px) {
    display: none;
  }
`;

export const StyledLogo = styled(NavLink)`
  display: block;
  background-image: url(${Logo});
  width: 226px;
  height: 103px;
  margin-left: 40px;
`;
