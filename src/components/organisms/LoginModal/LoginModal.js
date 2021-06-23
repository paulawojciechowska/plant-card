import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalBackground } from 'components/molecules/ModalBackground/ModalBackground';
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
const LoginModal = ({isVisible, setVisibility}) => (
    <ModalBackground>
        <ModalWrapper>
            <ButtonIcon exit icon={Icon} onClick={() => setVisibility(!isVisible)}/>
            <Heading>Log In</Heading>
            <Input placeholder="login"/>
            <Input placeholder="password"/>
            <Text>create account</Text>
            <Button onClick={() => setVisibility(!isVisible)}>enter</Button>
        </ModalWrapper>
    </ModalBackground>
);

LoginModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setVisibility: PropTypes.func.isRequired,
  };

export default LoginModal;