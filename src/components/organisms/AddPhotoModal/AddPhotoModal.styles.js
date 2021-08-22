import styled from 'styled-components';

export const Text = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.greyD};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
`;
