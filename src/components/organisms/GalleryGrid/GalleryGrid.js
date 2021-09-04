import React from 'react';
import GalleryPlant from 'components/atoms/GalleryPlant/GalleryPlant';
import { StyledWrapper } from './GalleryGrid.styles';
import { data as plants } from 'data/data';

const GalleryGrid = ({ handleOpenPhoto }) => (
  <StyledWrapper>
    {plants.map((item) => (
      <GalleryPlant plant={item.image} alt={item.name} handleOpenPhoto={handleOpenPhoto} />
    ))}
  </StyledWrapper>
);

export default GalleryGrid;
