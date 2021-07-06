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
const RadioForm = ({ label, icons, id, name}) => (
    <StyledWrapper>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        {icons.map((icon, i) => (
            <RadioButton icon={icon} name={name} value={`${id} ${i}`} key={`${id}`}/>
        ))}
    </StyledWrapper>
);
RadioForm.propTypes = {
    label: PropTypes.string.isRequired,
    icons: PropTypes.shape.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // value: PropTypes.number.isRequired,
}
export default RadioForm;