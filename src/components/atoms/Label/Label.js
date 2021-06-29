import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
  margin-top: 0;
`;