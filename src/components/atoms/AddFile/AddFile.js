import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Add from 'assets/icons/add.svg';

const Label = styled.label`
    padding: 0 30px;
    width: 280px;
    height: 60px;
    background-color: ${({theme}) => theme.greyL};
    border: none;
    border-radius: 30px;
    margin: 15px 0;
`;
const StyledInput = styled(Input)`
    height: 0;
    width: 0;
    opacity: 0;
`;
const Text = styled.p`
    position: relative;
    text-transform: uppercase;
    color: ${({theme}) => theme.greyD};
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: ${({theme}) => theme.bold};
    &:before {
        content: '';
        background-image: url(${Add});
        position: absolute;
        background-size: cover;
        width: 30px;
        height: 30px;
        display: block;
        right: 5px;
      }
      `;
const AddFile = () => (
    <Label>
        <Text>upload photo</Text>
        <StyledInput type='file' placeholder="file" />
    </Label>
);

export default AddFile;