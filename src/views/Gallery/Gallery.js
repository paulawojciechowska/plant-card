import React from 'react';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import GalleryGrid from 'components/organisms/GalleryGrid/GalleryGrid';
import AddPhotoModal from 'components/organisms/AddPhotoModal/AddPhotoModal';
import useModal from 'hooks/useModal';
import { StyledWrapper, StyledHeading } from './Gallery.styles';

const Gallery = () => {
  // const [isAddPhoto, setAddPhoto] = useState(false);
  const [isModalOpen, handleOpenModal, handleCloseModal] = useModal();
  return (
    <StyledWrapper>
      <AddPhotoModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      <StyledHeading upper>track plant grow, collect moments</StyledHeading>
      <ButtonAdd openModal={handleOpenModal} />
      <GalleryGrid />
    </StyledWrapper>
  );
};

export default Gallery;
