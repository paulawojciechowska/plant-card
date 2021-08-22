import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BackgroundWrapper, StyledInput } from './RadioButton.styled';

const RadioButton = ({ icon, name, value, index }) => {
  const [state, setState] = useState('unchecked');
  const handleChange = (e) => {
    console.log(e.target.value);
    if (state === 'checked') {
      setState('unchecked');
    } else {
      setState('checked');
      e.target.value = [index];
      console.log(e.target.value);
    }
  };
  return (
    <BackgroundWrapper icon={state === 'checked' ? icon[1] : icon[0]}>
      <StyledInput name={name} value={value} checked={state} type="radio" onChange={handleChange} />
    </BackgroundWrapper>
  );
};

RadioButton.propTypes = {
  icon: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default RadioButton;
