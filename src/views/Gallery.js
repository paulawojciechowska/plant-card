import React from 'react';
import styled from 'styled-components';
// import ButtonAdd from 'components/atoms/ButtonAddPlant/ButtonAddPlant';
import Heading from 'components/atoms/Heading/Heading';
import GalleryGrid from 'components/organisms/GalleryGrid/GalleryGrid';

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
const Gallery = () => (
    <StyledWrapper>
        <StyledHeading upper >track plant grow, collect moments</StyledHeading>
        {/* <ButtonAdd/> */}
        <GalleryGrid/>
    </StyledWrapper>
);

export default Gallery;