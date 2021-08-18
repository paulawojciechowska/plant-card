import React from 'react';
import styled from 'styled-components';
import { data as plants } from 'data/data';
import GalleryPlant from 'components/atoms/GalleryPlant/GalleryPlant';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 0 20px;
`;

const GalleryGrid = () => (
  <StyledWrapper>
    {plants.map((item) => (
      <GalleryPlant plant={item.image} alt={item.name} />
    ))}
  </StyledWrapper>
);

export default GalleryGrid;
