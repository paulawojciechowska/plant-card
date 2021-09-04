import React, { useState, useContext } from 'react';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import GalleryGrid from 'components/organisms/GalleryGrid/GalleryGrid';
import AddPhotoModal from 'components/organisms/AddPhotoModal/AddPhotoModal';
import useModal from 'hooks/useModal';
import { StyledWrapper, StyledHeading } from './Gallery.styles';
import ZoomPhoto from 'components/organisms/ZoomPhoto/ZoomPhoto';
import { PlantContext } from 'providers/PlantProvider';

const Gallery = () => {
  const [isPhotoOpen, handleOpenPhoto, handleClosePhoto] = useModal();
  const [isModalOpen, handleOpenModal, handleCloseModal] = useModal();
  const { zoomPlant, setZoomPhoto, setPhotos } = useContext(PlantContext);
  // const [plant, setPlant] = useState(null);
  const handleOpenZoomPhoto = (index) => {
    setZoomPhoto(index);
    handleOpenPhoto();
    setPhotos(index);
  };
  return (
    <StyledWrapper>
      <AddPhotoModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      <StyledHeading upper>track plant grow, collect moments</StyledHeading>
      <ButtonAdd openModal={handleOpenModal} />
      <GalleryGrid handleOpenPhoto={handleOpenZoomPhoto} />
      <ZoomPhoto isOpen={isPhotoOpen} handleClose={handleClosePhoto} plant={zoomPlant} />
    </StyledWrapper>
  );
};

export default Gallery;
