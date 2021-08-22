import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`;
export const StyledHeading = styled(Heading)`
  font-size: 27px;
  text-transform: uppercase;
  margin-right: 15px;
`;