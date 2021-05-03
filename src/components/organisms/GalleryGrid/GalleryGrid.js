import React from 'react';
import styled from 'styled-components';
import GalleryPlant from 'components/atoms/GalleryPlant/GalleryPlant';
import Plant1 from 'assets/img/gallery/plant1.jpg';
import Plant2 from 'assets/img/gallery/plant2.jpg';
import Plant3 from 'assets/img/gallery/plant3.jpg';
import Plant4 from 'assets/img/gallery/plant4.jpg';
import Plant5 from 'assets/img/gallery/plant5.jpg';
import Plant6 from 'assets/img/gallery/plant6.jpg';
import Plant7 from 'assets/img/gallery/plant7.jpg';
import Plant8 from 'assets/img/gallery/plant8.jpg';
import Plant9 from 'assets/img/gallery/plant9.jpg';
import Plant10 from 'assets/img/gallery/plant10.jpg';
import Plant11 from 'assets/img/gallery/plant11.jpg';
import Plant12 from 'assets/img/gallery/plant12.jpg';
import Plant13 from 'assets/img/gallery/plant13.jpg';
import Plant14 from 'assets/img/gallery/plant14.jpg';
import Plant15 from 'assets/img/gallery/plant15.jpg';

const plants = [
    {
        image: Plant1,
        name: 'monstera',
    },
    {
        image: Plant2,
        name: 'monstera',
    },
    {
        image: Plant3,
        name: 'monstera',
    },
    {
        image: Plant4,
        name: 'monstera',
    },
    {
        image: Plant5,
        name: 'monstera',
    },
    {
        image: Plant6,
        name: 'monstera',
    },
    {
        image: Plant7,
        name: 'monstera',
    },
    {
        image: Plant8,
        name: 'monstera',
    },
    {
        image: Plant9,
        name: 'monstera',
    },
    {
        image: Plant10,
        name: 'monstera',
    },
    {
        image: Plant11,
        name: 'monstera',
    },
    {
        image: Plant12,
        name: 'monstera',
    },
    {
        image: Plant13,
        name: 'monstera',
    },
    {
        image: Plant14,
        name: 'monstera',
    },
    {
        image: Plant15,
        name: 'monstera',
    },

]
const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 0 20px;
`;

// const StyledWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     justify-content: center;
//     margin: 0 20px;
// `;

const GalleryGrid = () => (
    <StyledWrapper>
        {plants.map(item => (
            <GalleryPlant
                plant={item.image}
                alt={item.name}
                />
        ))}
    </StyledWrapper>
);

export default GalleryGrid;