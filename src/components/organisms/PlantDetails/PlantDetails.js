import React from 'react';
import styled, { css } from 'styled-components';
import Plant6 from 'assets/img/gallery/plant6.jpg';
import { iconsData } from 'data/iconsData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 25px;
`;
const BigImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 25px;
`;
const StyledParagraph = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 5px;
  ${({ title }) =>
    title &&
    css`
      color: ${({ theme }) => theme.green};
      font-size: 25px;
    `}
  ${({ level }) =>
    level &&
    css`
      color: ${({ activeColor, theme }) => theme[activeColor]};
      text-transform: uppercase;
      font-size: 20px;
    `}
    ${({ date }) =>
    date &&
    css`
      color: ${({ theme }) => theme.black};
      font-size: 18px;
    `}
`;
const StyledDescription = styled.p`
  color: ${({ theme }) => theme.greyD};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 5px;
  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.green};
    `}
  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.black};
    `}
`;
const IconWrapper = styled.label`
  width: 48px;
  height: 48px;
  background-image: url(${({ icon }) => icon});
  margin: 0 11px;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
const PlantDetails = () => (
  <Wrapper>
    <MainInfoWrapper>
      <BigImage src={Plant6} />
      <div>
        <StyledParagraph title>Plant name</StyledParagraph>
        <StyledDescription>CARE LEVEL</StyledDescription>
        <StyledParagraph level activeColor="easy">
          Easy
        </StyledParagraph>
        <StyledDescription>ARRIVE TIME</StyledDescription>
        <StyledParagraph date>2/03/2020</StyledParagraph>
      </div>
    </MainInfoWrapper>
    <IconsWrapper>
      <StyledDescription green>SUN expourse</StyledDescription>
      {iconsData.sun.map((icon) => (
        <IconWrapper icon={icon[0]} />
      ))}
    </IconsWrapper>
    <IconsWrapper>
      <StyledDescription green>WATER needs</StyledDescription>
      {iconsData.water.map((icon) => (
        <IconWrapper icon={icon[0]} />
      ))}
    </IconsWrapper>
    <IconsWrapper>
      <StyledDescription green>MISTING need</StyledDescription>
      {iconsData.mist.map((icon) => (
        <IconWrapper icon={icon[0]} />
      ))}
    </IconsWrapper>
    <StyledDescription black>NOTES:</StyledDescription>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Wrapper>
);

export default PlantDetails;
