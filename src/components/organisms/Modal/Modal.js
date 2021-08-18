 import React from 'react';
 import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
 import PropTypes from 'prop-types';
import Icon from 'assets/icons/exit.svg';
import { ModalWrapper} from './Modal.styles';

 const Modal = ({ handleClose, isOpen, children }) =>  (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
        <ButtonIcon exit icon={Icon} onClick={handleClose}/>
        {children}
    </ModalWrapper>
    );
Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.shape.isRequired,
    }
 export default Modal;