import React, { useState , useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalBackground } from 'components/molecules/ModalBackground/ModalBackground';
import { ModalWrapper } from 'components/molecules/ModalWrapper/ModalWrapper';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import FormField from 'components/molecules/FormField/FormField';
import RadioForm from 'components/molecules/RadioForm/RadioForm';
import { iconsData } from 'data/iconsData';
import { PlantContext } from 'providers/PlantProvider';
import Icon from 'assets/icons/exit.svg';

const initialFormState = {
    name: '',
    level: '',
    date: '',
    note: '',
    sun: 0,
    water: 0,
    mist: 0,
  };

const StyledModalWrapper = styled(ModalWrapper)`
  align-items: start;
  padding: 25px 60px;
`;
const StyledButton = styled(Button)`
  width: 300px;
  margin: 0 auto;
`;
const PlantForm = ({ isDetailedCard, setDetailedCard }) => {
    const [formValues, setFormValues] = useState(initialFormState);
    const { addNewPlant } = useContext(PlantContext);
  
    const handleInputChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmitPlant = (e) => {
        e.preventDefault();
        addNewPlant(formValues);
        setFormValues(initialFormState);
        setDetailedCard(!isDetailedCard)
    };
    return (
        <ModalBackground>
            <StyledModalWrapper as="form" onSubmit={handleSubmitPlant}>
                <ButtonIcon exit onClick={() => setDetailedCard(!isDetailedCard)} icon={Icon} />
                <FormField label="name" id="name" name="name" value={formValues.average} onChange={handleInputChange} />
                <FormField label="care level" id="level" name="level" value={formValues.level} onChange={handleInputChange} />
                <FormField label="arrival date" id="date" name="date" value={formValues.date} onChange={handleInputChange} />
                <RadioForm label="SUN expourse" icons={iconsData.sun} id="sun" name="sun" value={formValues.sun} onChange={handleInputChange}/>
                <RadioForm label="WATER needs" icons={iconsData.water} id="water" name="water" value={formValues.sun} onChange={handleInputChange}/>
                <RadioForm label="MISTING needs" icons={iconsData.mist} id="mist" name="mist" value={formValues.sun} onChange={handleInputChange}/>
                <FormField label="notes" id="notes" name="notes" value={formValues.note} onChange={handleInputChange} />
                <StyledButton big>add new plant</StyledButton>
            </StyledModalWrapper>
        </ModalBackground>
    );
};

PlantForm.propTypes = {
    isDetailedCard: PropTypes.bool.isRequired,
    setDetailedCard: PropTypes.func.isRequired,
  };

export default PlantForm;