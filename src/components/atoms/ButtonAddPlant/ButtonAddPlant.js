import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import Icon from 'assets/icons/leaves.svg';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
        justify-content: center;
        }
`;
const StyledHeading = styled(Heading)`
    font-size: 27px;
    text-transform: uppercase;
    margin-right: 15px;
`;
const ButtonAddPlant = ({ isDetailedCard, setDetailedCard }) => (
    <StyledDiv onClick={() => setDetailedCard(!isDetailedCard)}>
        <StyledHeading>Add new plant</StyledHeading>
        <ButtonIcon icon={Icon}/>
    </StyledDiv>
);
ButtonAddPlant.propTypes = {
    isDetailedCard: PropTypes.bool.isRequired,
    setDetailedCard: PropTypes.func.isRequired,
  };
export default ButtonAddPlant;