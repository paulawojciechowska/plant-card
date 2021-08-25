import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 5px 5px 5px #ccc;
  margin: 50px;
`;
const GalleryPlant = ({ plant, alt, handleOpenPhoto }) => <StyledImage src={plant} alt={alt} onClick={() => handleOpenPhoto(plant)} />;

GalleryPlant.propTypes = {
  plant: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
GalleryPlant.defaultProps = {
  alt: 'plant image',
};
export default GalleryPlant;
