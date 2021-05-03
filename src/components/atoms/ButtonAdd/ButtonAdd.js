import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import Icon from 'assets/icons/leaves.svg';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
        justify-content: center;
        }
`;
const StyledHeading = styled(Heading)`
    font-size: 27px;
    text-transform: uppercase;
    margin-right: 15px;
`;
const ButtonAdd = () => (
    <StyledDiv>
        <StyledHeading>Add new plant</StyledHeading>
        <ButtonIcon icon={Icon} />
    </StyledDiv>
);

export default ButtonAdd;