import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import Icon from 'assets/icons/exit.svg';
import { ModalWrapper } from './ZoomPhoto.styles';

const Modal = ({ handleClose, isOpen, plant }) => (
  <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
    <ButtonIcon exit icon={Icon} onClick={handleClose} />
    <img src={plant} alt="img" />
  </ModalWrapper>
);
Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.shape.isRequired,
};
export default Modal;
