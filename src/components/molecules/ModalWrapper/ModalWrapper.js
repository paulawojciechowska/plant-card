import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({ theme }) => theme.white};
    width: 100%;
    max-width: 500px;
    margin: auto;
    border-radius: 30px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:focus {
        outline: none;
    }
`;