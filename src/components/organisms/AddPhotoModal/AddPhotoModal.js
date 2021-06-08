import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import AddFile from 'components/atoms/AddFile/AddFile';
import Icon from 'assets/icons/exit.svg';

const ExternalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(120,120,120,0.5);
    backdrop-filter: blur(4px);
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
    display: flex;
    flex-direction:column;
    align-items: center;
`;
const Text = styled.p`
    margin: 0;
    text-transform: uppercase;
    color: ${({theme}) => theme.greyD};
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: ${({theme}) => theme.bold};
`;

const AddPhotoModal = ({ isAddPhoto, setAddPhoto }) => (
    <ExternalWrapper>
    <FormBackground>
        <ButtonIcon exit icon={Icon} onClick={() => setAddPhoto(!isAddPhoto)}/>
        <Heading>Add photo</Heading>
        <Input placeholder="description"/>
        <Input placeholder="photo url"/>
        <Text> or </Text>
        <AddFile />
        <Button onClick={() => setAddPhoto(!isAddPhoto)}>add</Button>
    </FormBackground>
</ExternalWrapper>
);
AddPhotoModal.propTypes = {
    isAddPhoto: PropTypes.bool.isRequired,
    setAddPhoto: PropTypes.func.isRequired,
  };
export default AddPhotoModal;