import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
    opacity: 0;
`;
const BackgroundWrapper = styled.label`
    width: 48px;
    height: 48px;
    background-image: url(${({ icon }) => icon});
    margin: 0 11px;
`;
const RadioButton = ({icon}) => {
    const [state, setState] = useState('unchecked');
    const handleChange = () => {
        if (state === 'checked') {
             setState('unchecked')
         } else {
              setState('checked');
         }
    }
    return (
        <BackgroundWrapper icon={(state === 'checked') ? icon[1] : icon[0]}>
            <StyledInput name='mist' chacked={state} type='radio' onChange={handleChange}/>
        </BackgroundWrapper>
    )
};

RadioButton.propTypes = {
    icon: PropTypes.shape.isRequired,
}
export default RadioButton;