import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: none;
  margin: 20px 0;
`;
