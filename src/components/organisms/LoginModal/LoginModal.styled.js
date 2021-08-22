import styled from 'styled-components';

export const Text = styled.p`
  margin: 20px 0 15px 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
`;
