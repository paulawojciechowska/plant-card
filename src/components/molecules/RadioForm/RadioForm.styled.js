import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
export const StyledLabel = styled(Label)`
  text-transform: none;
  width: 160px;
`;