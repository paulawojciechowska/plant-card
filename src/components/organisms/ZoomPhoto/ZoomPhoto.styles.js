import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  &:focus {
    outline: none;
  }
  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
    box-shadow: 15px 15px 15px #ccc;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
