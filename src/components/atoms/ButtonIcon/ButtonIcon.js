import styled from 'styled-components';

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
`;

export default ButtonIcon;