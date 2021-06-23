import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledHeading = styled(Heading)`
    color: ${({theme}) => theme.greyD};
    margin: 0 10px;
    @media only screen and (max-width: 750px) {
        font-size: 1.2em;
    }
`;