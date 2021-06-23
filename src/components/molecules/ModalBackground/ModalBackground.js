import styled from 'styled-components';

export const ModalBackground = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(120,120,120,0.5);
    backdrop-filter: blur(4px);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 12000;
`;