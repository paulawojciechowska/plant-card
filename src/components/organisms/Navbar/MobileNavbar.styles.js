import { FiMenu } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import styled from 'styled-components';

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: flex;
    position: relative;
  }
`;
export const HamburgerIcon = styled(FiMenu)`
  color: ${({ theme }) => theme.green};
  width: 50px;
  height: 50px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  z-index: 999999;
`;
export const CloseIcon = styled(FaLeaf)`
  color: ${({ theme }) => theme.green};
  width: 50px;
  height: 50px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  z-index: 999999;
`;