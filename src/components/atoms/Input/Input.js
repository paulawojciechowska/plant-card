import styled from 'styled-components';

const Input = styled.input`
    padding: 0 30px;
    font-size: ${({theme}) => theme.fontSize.m};
    font-weight: ${({theme}) => theme.bold};
    width: 380px;
    height: 60px;
    background-color: ${({theme}) => theme.greyL};
    border: none;
    border-radius: 30px;
    margin: 15px 0;
    outline: none;

    ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({theme}) => theme.greyD};
    }
`;

export default Input;

