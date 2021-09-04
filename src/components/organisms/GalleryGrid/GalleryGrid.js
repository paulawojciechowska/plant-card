import React, { useContext } from 'react';
import GalleryPlant from 'components/atoms/GalleryPlant/GalleryPlant';
import { StyledWrapper } from './GalleryGrid.styles';
import { PlantContext } from 'providers/PlantProvider';

const GalleryGrid = ({ handleOpenPhoto }) => {
  const { galleryPhotos } = useContext(PlantContext);
  return (
    <StyledWrapper>
      {galleryPhotos.map((item, i) => (
        <GalleryPlant plant={item.image} alt={item.name} handleOpenPhoto={handleOpenPhoto} index={i} />
      ))}
    </StyledWrapper>
  );
};

export default GalleryGrid;
