import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalBackground } from 'components/molecules/ModalBackground/ModalBackground';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import AddFile from 'components/molecules/AddFile/AddFile';
import Icon from 'assets/icons/exit.svg';

const Text = styled.p`
    margin: 0;
    text-transform: uppercase;
    color: ${({theme}) => theme.greyD};
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: ${({theme}) => theme.bold};
`;

const AddPhotoModal = ({ isAddPhoto, setAddPhoto }) => (
    <ModalBackground>
        <ModalWrapper>
            <ButtonIcon exit icon={Icon} onClick={() => setAddPhoto(!isAddPhoto)}/>
            <Heading>Add photo</Heading>
            <Input placeholder="description"/>
            <Input placeholder="photo url"/>
            <Text> or </Text>
            <AddFile />
            <Button onClick={() => setAddPhoto(!isAddPhoto)}>add</Button>
        </ModalWrapper>
    </ModalBackground>
);
AddPhotoModal.propTypes = {
    isAddPhoto: PropTypes.bool.isRequired,
    setAddPhoto: PropTypes.func.isRequired,
  };
export default AddPhotoModal;