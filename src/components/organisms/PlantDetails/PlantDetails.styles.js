import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 25px;
`;
export const BigImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 25px;
`;
export const StyledParagraph = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 10px 5px;
  ${({ title }) =>
    title &&
    css`
      color: ${({ theme }) => theme.green};
      font-size: 25px;
    `}
  ${({ level }) =>
    level &&
    css`
      color: ${({ activeColor, theme }) => theme[activeColor]};
      text-transform: uppercase;
      font-size: 20px;
    `}
    ${({ date }) =>
    date &&
    css`
      color: ${({ theme }) => theme.black};
      font-size: 18px;
    `}
`;
export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.greyD};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.bold};
  margin: 10px 5px;
  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.green};
    `}
  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.black};
    `}
`;
export const IconWrapper = styled.label`
  width: 48px;
  height: 48px;
  background-image: url(${({ icon }) => icon});
  margin: 0 11px;
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;
