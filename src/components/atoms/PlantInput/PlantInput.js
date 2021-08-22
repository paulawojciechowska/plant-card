import styled from 'styled-components';

export const PlantInput = styled.input`
  padding: 5px 8px;
  border: none;
  width: 288px;
  height: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.greyD};
  box-sizing: border-box;
  margin-bottom: 20px;
  /* box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09); */
  &:focus {
    outline: none;
    /* box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3); */
  }
`;
