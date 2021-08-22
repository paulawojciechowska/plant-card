import styled from 'styled-components';

export const StyledInput = styled.input`
  opacity: 0;
`;
export const BackgroundWrapper = styled.label`
  width: 48px;
  height: 48px;
  background-image: url(${({ icon }) => icon});
  margin: 0 11px;
`;