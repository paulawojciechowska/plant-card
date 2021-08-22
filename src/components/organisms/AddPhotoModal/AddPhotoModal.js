import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import AddFile from 'components/molecules/AddFile/AddFile';
import Icon from 'assets/icons/exit.svg';
import { Text } from './AddPhotoModal.styles';

const AddPhotoModal = ({ handleClose, isOpen }) => (
  <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
    <ButtonIcon exit icon={Icon} onClick={handleClose} />
    <Heading>Add photo</Heading>
    <Input placeholder="description" />
    <Input placeholder="photo url" />
    <Text> or </Text>
    <AddFile />
    <Button onClick={handleClose}>add</Button>
  </ModalWrapper>
);

AddPhotoModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default AddPhotoModal;
