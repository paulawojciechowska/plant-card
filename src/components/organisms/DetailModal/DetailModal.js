import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
`;
const StyledWrapper = styled.div`
    height: 700px;
    width: 500px;
    border-radius: 30px;
    background-color: rgba(255,255,255,1);
    opacity: 1;
    margin: auto;
`;
const Button = styled.button`
    color: green;
`;
const DetailModal = ({ isDetailedCard, setDetailedCard }) => (
    <Background>
        <StyledWrapper>
            <Heading green>Pieniążek</Heading>
            <Button onClick={() => setDetailedCard(!isDetailedCard)}>close</Button>
        </StyledWrapper>
    </Background>
);

DetailModal.propTypes = {
    isDetailedCard: PropTypes.bool.isRequired,
    setDetailedCard: PropTypes.func.isRequired,
  };

export default DetailModal;