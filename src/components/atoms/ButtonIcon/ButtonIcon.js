import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
    display: block;
    background-image: url(${({ icon }) => icon});
    background-color: ${({theme}) => theme.green};
    width: 48px;
    height: 48px;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60%;
    border: none;
    cursor: pointer;
    ${({ logout }) => logout && css`
      background-color: transparent;
      width: 86px;
      height: 64px;
      margin: 0 29px;
      @media only screen and (max-width: 820px) {
        width: 70px;
        height: 53px;
    }
    `}
    ${({ exit }) =>
    exit &&
    css`
      position: absolute;
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
    `}
    ${({ form }) =>
    form &&
    css`
      background-color: transparent;
      background-size: 100%;
    `}

`;

export default ButtonIcon;