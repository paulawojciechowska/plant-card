import React, { useState } from 'react';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import GalleryGrid from 'components/organisms/GalleryGrid/GalleryGrid';
import AddPhotoModal from 'components/organisms/AddPhotoModal/AddPhotoModal';
import { StyledWrapper, StyledHeading } from './Gallery.styles';

const Gallery = () => {
    const [isAddPhoto, setAddPhoto] = useState(false);
    return (
        <StyledWrapper>
        { isAddPhoto && <AddPhotoModal isAddPhoto={isAddPhoto} setAddPhoto={setAddPhoto}/> }
        <StyledHeading upper >track plant grow, collect moments</StyledHeading>
        <ButtonAdd  isOpen = {isAddPhoto} openModal = {setAddPhoto} />
        <GalleryGrid/>
    </StyledWrapper>
    )
};

export default Gallery;