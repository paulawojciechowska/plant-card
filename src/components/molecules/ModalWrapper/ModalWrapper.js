import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: absolute;
    background: ${({ theme }) => theme.white};
    width: 100%;
    max-width: 500px;
    margin: auto;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;