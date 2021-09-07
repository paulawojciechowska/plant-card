import React from 'react';
import LogoutImg from 'assets/illustration/logout.svg';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { Wrapper, StyledImage, StyledLink } from './Logout.styled';

const Logout = () => (
  <Wrapper>
    <StyledImage src={LogoutImg} />
    <Paragraph>You are logged out</Paragraph>
    <StyledLink href="/">Home</StyledLink>
  </Wrapper>
);

export default Logout;
