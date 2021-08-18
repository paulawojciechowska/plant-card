import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 35px;
  font-weight: ${({ theme }) => theme.bold};
  margin: 0;

  ${({ grey }) =>
    grey &&
    css`
      color: ${({ theme }) => theme.greyD};
      font-weight: ${({ theme }) => theme.medium};
    `}
`;

export default Paragraph;
