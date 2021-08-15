import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.white};
    min-height: 600px;
    min-width: 400px;
    border-radius: 30px;
    box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
`;