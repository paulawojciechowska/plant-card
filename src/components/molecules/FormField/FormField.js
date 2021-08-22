import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { PlantInput } from 'components/atoms/PlantInput/PlantInput';
import { Wrapper } from './FormField.styles.js';

const FormField = ({ onChange, value, label, name, id, placeholder = '' }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}:</Label>
    <PlantInput name={name} id={id} type="text" placeholder={placeholder} value={value} onChange={onChange} />
  </Wrapper>
);

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormField;
