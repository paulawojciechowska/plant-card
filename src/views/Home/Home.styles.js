import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled.div`
  /* position: relative; */
  width: 100vw;
`;
export const TextWrapper = styled.div`
  margin: 35px 0;
  @media only screen and (max-width: 600px) {
    margin: 15px 0;
  }
`;
export const StyledBackground = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  background-size: 100%;
  z-index: -5;
  @media only screen and (max-width: 914px) {
    display: none;
  }
`;
export const StyledIllustration = styled.img`
  position: absolute;
  width: 630px;
  height: 630px;
  /* width: 50%;
    height: auto; */
  background-repeat: no-repeat;
  background-size: cover;
  right: 100px;
  bottom: 20px;
  background-size: 100%;
  z-index: 9999;

  @media only screen and (max-width: 1200px) {
    width: 580px;
    height: 580px;
    right: 50px;
    bottom: 15px;
  }
  @media only screen and (max-width: 914px) {
    width: 550px;
    height: 550px;
    right: 5px;
    bottom: 50px;
    /* position: relative;
        display: inline-block; */
    margin: auto;
  }
  @media only screen and (max-width: 650px) {
    width: 490px;
    height: 490px;
  }
`;
export const StyledParagraph = styled(Paragraph)`
  padding-left: 52px;

  @media only screen and (max-width: 1200px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 820px) {
    font-size: 25px;
  }
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.green};
  margin-top: 35px;
  padding-left: 52px;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
  z-index: 99999;
`;
export const Break = styled.br`
  @media only screen and (max-width: 550px) {
    display: none !important;
  }
`;
