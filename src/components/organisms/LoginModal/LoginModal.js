import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Icon from 'assets/icons/exit.svg';

const ExternalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    width: 100vw;
    height: 100vh;
    z-index: 12000;
`;
const FormBackground = styled.div`
    position: absolute;
    background: white;
    margin: auto;
    transform: translateX(100%) translateY(25%);
    width: 480px;
    height: 480px;
    border-radius: 30px;
    padding: 30px;
    box-shadow: 5px 5px 5px 5px #ccc;
    display: flex;
    flex-direction:column;
    align-items: center;
`;
const LoginModal = ({isVisible, setVisibility}) => (
    <ExternalWrapper>
        <FormBackground>
            <ButtonIcon exit icon={Icon} onClick={() => setVisibility(!isVisible)}/>
            <Heading>Log In</Heading>
            <Input placeholder="login"/>
            <Input placeholder="password"/>
            <p>create account</p>
            <Button onClick={() => setVisibility(!isVisible)}>enter</Button>
        </FormBackground>
    </ExternalWrapper>
);

LoginModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    setVisibility: PropTypes.func.isRequired,
  };

export default LoginModal;