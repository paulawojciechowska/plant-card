import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Icon from 'assets/icons/exit.svg';
import { Text } from './LoginModal.styled';

const LoginModal = ({ handleClose, isOpen }) => (
  <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
    <ButtonIcon exit icon={Icon} onClick={handleClose} />
    <Heading>Log In</Heading>
    <Input placeholder="login" />
    <Input placeholder="password" />
    <Text>create account</Text>
    <Button onClick={handleClose}>enter</Button>
  </ModalWrapper>
);

LoginModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default LoginModal;
