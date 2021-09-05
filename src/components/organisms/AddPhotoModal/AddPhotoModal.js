import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import AddFile from 'components/molecules/AddFile/AddFile';
import Icon from 'assets/icons/exit.svg';
import { Text, StyledForm } from './AddPhotoModal.styles';
import { PlantContext } from 'providers/PlantProvider';
import { useForm } from 'react-hook-form';

const AddPhotoModal = ({ handleClose, isOpen }) => {
  const { addGalleryPhoto } = useContext(PlantContext);
  const { register, handleSubmit, reset } = useForm();
  const formSubmit = (formValues) => {
    addGalleryPhoto(formValues);
    reset();
    handleClose();
  };
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      <ButtonIcon exit icon={Icon} onClick={handleClose} />
      <StyledForm onSubmit={handleSubmit(formSubmit)}>
        <Heading>Add photo</Heading>
        <Input placeholder="description" {...register('name', { required: true })} />
        <Input placeholder="photo url" {...register('image', { required: true })} />
        <Text> or </Text>
        <AddFile />
        <Button type="submit">add</Button>
      </StyledForm>
    </ModalWrapper>
  );
};
{
  /* <FormField label="login" name="login" id="login" {...register('login')} />
<FormField label="password" name="password" id="password" type="password" {...register('password')} /> */
}

AddPhotoModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default AddPhotoModal;
