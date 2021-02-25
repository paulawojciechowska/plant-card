import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
// import Heading from 'components/atoms/Heading/Heading';
// import Input from 'components/atoms/Input/Input';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;

// const StyledButton = styled(Button)`
//     margin-top: 50px;
//     background-image: linear-gradient(90deg, rgba(65,105,225,1) 0%, rgba(212,148,233,1) 50%, rgba(69,106,225,1) 100%);
//     width: 230px;
// `;

const Form = () => (
    <StyledWrapper>
        <Button>regular</Button>
        <Button disabled>disabled</Button>
        <Button warning>!</Button>
    </StyledWrapper>
);

export default Form;

