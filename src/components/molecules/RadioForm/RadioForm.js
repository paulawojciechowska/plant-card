import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import RadioButton from 'components/atoms/RadioButton/RadioButton';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;
const StyledLabel = styled(Label)`
    text-transform: none;
    width: 160px;
    /* margin-right: 55px; */
`;
const RadioForm = ({ label, icons, id, name, onChange, value}) => (
    <StyledWrapper onChange={onChange}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {icons.map((icon) => (
            <RadioButton icon={icon} name={name} value={value} key={`${id}`}/>
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
}
export default RadioForm;