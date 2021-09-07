import React from 'react';
import { iconsData } from 'data/iconsData';
import { Wrapper, MainInfoWrapper, BigImage, StyledParagraph, StyledDescription, IconsWrapper, IconWrapper } from './PlantDetails.styles';
const PlantDetails = ({ currentPlant }) => (
  <Wrapper>
    <MainInfoWrapper>
      <BigImage src={currentPlant.image} />
      <div>
        <StyledParagraph title>{currentPlant.name}</StyledParagraph>
        <StyledDescription>CARE LEVEL</StyledDescription>
        <StyledParagraph level activeColor={currentPlant.level}>
          {currentPlant.level}
        </StyledParagraph>
        <StyledDescription>ARRIVE TIME</StyledDescription>
        <StyledParagraph date>{currentPlant.date}</StyledParagraph>
      </div>
    </MainInfoWrapper>
    <IconsWrapper>
      <StyledDescription green>SUN expourse</StyledDescription>
      {iconsData.sun.map((icon, i) => {
        if (i === parseInt(currentPlant.sun)) {
          return <IconWrapper icon={icon[1]} />;
        } else {
          return <IconWrapper icon={icon[0]} />;
        }
      })}
    </IconsWrapper>
    <IconsWrapper>
      <StyledDescription green>WATER needs</StyledDescription>
      {iconsData.water.map((icon, i) => {
        if (i === parseInt(currentPlant.water)) {
          return <IconWrapper icon={icon[1]} />;
        } else {
          return <IconWrapper icon={icon[0]} />;
        }
      })}
    </IconsWrapper>
    <IconsWrapper>
      <StyledDescription green>MISTING need</StyledDescription>
      {iconsData.mist.map((icon) => {
        if (currentPlant.mist) {
          return <IconWrapper icon={icon[1]} />;
        } else {
          return <IconWrapper icon={icon[0]} />;
        }
      })}
    </IconsWrapper>
    <StyledDescription black>NOTES:</StyledDescription>
    <p>{currentPlant.note}</p>
  </Wrapper>
);

export default PlantDetails;
