import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import { PlantInput } from 'components/atoms/PlantInput/PlantInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: left; */
  justify-content: left;
  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}:</Label>
    <PlantInput name={name} id={id} type="text" value={value} onChange={onChange} />
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
