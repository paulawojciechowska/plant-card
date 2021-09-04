import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import Icon from 'assets/icons/exit.svg';
import Left from 'assets/icons/left.svg';
import Right from 'assets/icons/right.svg';
import { ModalWrapper, StyledWrapper } from './ZoomPhoto.styles';

const Modal = ({ handleClose, isOpen, plant }) => (
  <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
    <ButtonIcon exit icon={Icon} onClick={handleClose} />
    <StyledWrapper>
      <ButtonIcon arrowL icon={Left} onClick={handleClose} />
      <img src={plant} alt="img" />
      <ButtonIcon arrowR icon={Right} onClick={handleClose} />
    </StyledWrapper>
  </ModalWrapper>
);
Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.shape.isRequired,
};
export default Modal;
