import React, { useState, useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import RadioForm from 'components/molecules/RadioForm/RadioForm';
import { iconsData } from 'data/iconsData';
import { PlantContext } from 'providers/PlantProvider';
import { Wrapper, ButtonWrapper, StyledButton } from './PlantForm.styles';

const initialFormState = {
  id: '',
  name: '',
  level: '',
  date: '',
  note: '',
  sun: 0,
  water: 0,
  mist: 0,
};

const PlantForm = ({ handleClose }) => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { addNewPlant } = useContext(PlantContext);
  // const icons = iconsData.mist;

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };
  const handleSubmitPlant = (e) => {
    e.preventDefault();
    console.log(formValues);
    addNewPlant(formValues);
    setFormValues(initialFormState);
    handleClose();
  };
  return (
    <Wrapper as="form" onSubmit={handleSubmitPlant}>
      <FormField label="name" id="name" name="name" value={formValues.average} onChange={handleInputChange} />
      <FormField label="care level" id="level" name="level" placeholder="easy/mid/hard" value={formValues.level} onChange={handleInputChange} />
      <FormField label="arrival date" id="date" name="date" value={formValues.date} onChange={handleInputChange} />
      <FormField label="image" id="image" name="image" placeholder="paste url" value={formValues.image} onChange={handleInputChange} />
      <RadioForm label="SUN expourse" icons={iconsData.sun} id="sun" name="sun" value={formValues.sun} onChange={handleInputChange} />
      <RadioForm label="WATER needs" icons={iconsData.water} id="water" name="water" value={formValues.water} onChange={handleInputChange} />
      <RadioForm label="MISTING needs" icons={iconsData.mist} id="mist" name="mist" value={formValues.mist} onChange={handleInputChange} />
      <FormField label="notes" id="notes" name="note" value={formValues.note} onChange={handleInputChange} />
      <ButtonWrapper>
        <StyledButton type="submit" big>
          add new plant
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PlantForm;
