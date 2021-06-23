import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledImage, StyledParagraph } from './Card.styles';

const Card = ({ image, name, level, date}) => (
    <StyledWrapper>
        <StyledImage src={image} />
        <div>
            <StyledParagraph title>{name}</StyledParagraph>
            <StyledParagraph level activeColor={level}>{level}</StyledParagraph>
            <StyledParagraph date>{date}</StyledParagraph>
        </div>
    </StyledWrapper>
);

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,

}
export default Card;