import styled, {css} from 'styled-components';

const Heading = styled.h1`
    color: ${({theme}) => theme.green};
    ${({ upper }) =>
    upper &&
    css`
      text-transform: uppercase;
    `}
`;

export default Heading;