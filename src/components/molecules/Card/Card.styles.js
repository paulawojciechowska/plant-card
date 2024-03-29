import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  width: 332px;
  height: 163px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  margin: 60px 70px;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 10px 0 #bcbcbc;
  -moz-box-shadow: 5px 5px 10px 0 #bcbcbc;
  box-shadow: 5px 5px 10px 0 #bcbcbc;
  @media only screen and (max-width: 1480px) {
    margin: 60px 40px;
  }
  @media only screen and (max-width: 1300px) {
    margin: 60px 20px;
  }
  @media only screen and (max-width: 900px) {
    margin: 20px 20px;
  }
`;

export const StyledImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 25px;
`;

export const StyledParagraph = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 5px;
  ${({ title }) =>
    title &&
    css`
      color: ${({ theme }) => theme.green};
      font-size: 20px;
    `}
  ${({ level }) =>
    level &&
    css`
      color: ${({ activeColor, theme }) => theme[activeColor]};
      text-transform: uppercase;
    `}
    ${({ date }) =>
    date &&
    css`
      color: ${({ theme }) => theme.greyD};
    `}
`;
