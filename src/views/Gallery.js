import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import Heading from 'components/atoms/Heading/Heading';
import GalleryGrid from 'components/organisms/GalleryGrid/GalleryGrid';
import AddPhotoModal from 'components/organisms/AddPhotoModal/AddPhotoModal';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledHeading = styled(Heading)`
    color: ${({theme}) => theme.greyD};
    margin: 0 10px;
    @media only screen and (max-width: 750px) {
        font-size: 1.2em;
    }
`;
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