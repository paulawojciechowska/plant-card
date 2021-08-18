import styled, {css} from 'styled-components';

const Button = styled.button`
    background-color: ${({theme}) => theme.green};
    color: white;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: ${({theme}) => theme.bold};
    letter-spacing: 1px;
    font-size: ${({theme}) => theme.fontSize.m};
    cursor: pointer;

    ${({ big }) =>
      big &&
      css`
        width: 300;
      `}
`;

export default Button;

