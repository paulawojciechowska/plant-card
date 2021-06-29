import React from 'react';
import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import mist0 from 'assets/icons/form/mist0.svg';

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const StyledLabel = styled(Label)`
    text-transform: none;
    margin-right: 55px;
`;
const RadioForm = () => (
    <StyledWrapper>
        <StyledLabel>MISTING needs:</StyledLabel>
        <ButtonIcon form icon={mist0}/>
    </StyledWrapper>
);

export default RadioForm;