import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'components/atoms/RadioButton/RadioButton';
import { StyledWrapper, StyledLabel } from './RadioForm.styled';

const RadioForm = ({ label, icons, id, name, onChange, value }) => (
  <StyledWrapper onChange={onChange}>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    {icons.map((icon, i) => (
      <RadioButton index={i} icon={icon} name={name} value={value} key={`${id}`} />
    ))}
  </StyledWrapper>
);
RadioForm.propTypes = {
  label: PropTypes.string.isRequired,
  icons: PropTypes.shape.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default RadioForm;
