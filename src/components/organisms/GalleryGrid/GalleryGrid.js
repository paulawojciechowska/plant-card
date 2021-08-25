import React from 'react';
import { data as plants } from 'data/data';
import GalleryPlant from 'components/atoms/GalleryPlant/GalleryPlant';
import { StyledWrapper } from './GalleryGrid.styles';

const GalleryGrid = ({ handleOpenPhoto }) => (
  <StyledWrapper>
    {plants.map((item) => (
      <GalleryPlant plant={item.image} alt={item.name} handleOpenPhoto={handleOpenPhoto} />
    ))}
  </StyledWrapper>
);

export default GalleryGrid;
