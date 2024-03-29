import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  ${Label} {
    margin: 10px 0;
  }
`;