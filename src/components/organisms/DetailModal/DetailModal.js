import React from 'react';
import PropTypes from 'prop-types';
import { ModalBackground } from 'components/molecules/ModalBackground/ModalBackground';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Icon from 'assets/icons/exit.svg';

const DetailModal = ({ isDetailedCard, setDetailedCard }) => (
    <ModalBackground>
        <ModalWrapper>
            <Heading green>Pieniążek</Heading>
            <ButtonIcon exit onClick={() => setDetailedCard(!isDetailedCard)} icon={Icon} />
        </ModalWrapper>
    </ModalBackground>
);

DetailModal.propTypes = {
    isDetailedCard: PropTypes.bool.isRequired,
    setDetailedCard: PropTypes.func.isRequired,
  };

export default DetailModal;