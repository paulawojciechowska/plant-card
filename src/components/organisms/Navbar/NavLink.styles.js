import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const LinksWrapper = styled.ul`
  padding-bottom: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 990px) {
    padding-right: 35px;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
    justify-content: center;
    z-index: 999999;
  }
`;
export const StyledLi = styled.li`
  list-style-type: none;
  @media only screen and (max-width: 990px) {
    padding: 10px 0;
    margin: 0;
  }
`;
export const StyledHeading = styled(Heading)`
  margin: 0 29px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  @media only screen and (max-width: 550px) {
    font-size: 20px;
  }

  &.active {
    color: ${({ theme }) => theme.green};
  }
`;
