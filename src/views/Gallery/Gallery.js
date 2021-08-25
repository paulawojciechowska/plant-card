import React, { useState } from 'react';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import GalleryGrid from 'components/organisms/GalleryGrid/GalleryGrid';
import AddPhotoModal from 'components/organisms/AddPhotoModal/AddPhotoModal';
import useModal from 'hooks/useModal';
import { StyledWrapper, StyledHeading } from './Gallery.styles';
import ZoomPhoto from 'components/organisms/ZoomPhoto/ZoomPhoto';

const Gallery = () => {
  const [isPhotoOpen, handleOpenPhoto, handleClosePhoto] = useModal();
  const [isModalOpen, handleOpenModal, handleCloseModal] = useModal();
  const [plant, setPlant] = useState(null);
  const handleOpenZoomPhoto = (photo) => {
    setPlant(photo);
    handleOpenPhoto();
  };
  return (
    <StyledWrapper>
      <AddPhotoModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      <StyledHeading upper>track plant grow, collect moments</StyledHeading>
      <ButtonAdd openModal={handleOpenModal} />
      <GalleryGrid handleOpenPhoto={handleOpenZoomPhoto} />
      <ZoomPhoto isOpen={isPhotoOpen} handleClose={handleClosePhoto} plant={plant} />
    </StyledWrapper>
  );
};

export default Gallery;
