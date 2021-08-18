import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Icon from 'assets/icons/exit.svg';

const Text = styled.p`
    margin: 20px 0 15px 0;
    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: ${({theme}) => theme.bold};
`;
const LoginModal = ({handleClose, isOpen}) => (
        <ModalWrapper isOpen={isOpen} onRequestClose={handleClose}>
            <ButtonIcon exit icon={Icon} onClick={handleClose} />
            <Heading>Log In</Heading>
            <Input placeholder="login"/>
            <Input placeholder="password"/>
            <Text>create account</Text>
            <Button onClick={handleClose}>enter</Button>
        </ModalWrapper>
);

LoginModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

export default LoginModal;