import React from 'react';
import styled, {css} from 'styled-components';
import plant from 'assets/img/pilea-peperomioides.jpg';

const StyledWrapper = styled.div`
    width: 332px;
    height: 163px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    -webkit-box-shadow: 5px 5px 5px 0px #BCBCBC;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 5px 5px 5px 0px #BCBCBC;  /* Firefox 3.5 - 3.6 */
     box-shadow: 5px 5px 5px 0px #BCBCBC;
`;

const StyledImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 25px;
`;
const InnerWrapper = styled.div`

`;
const StyledParagraph = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 5px;
    ${({title}) =>
    title &&
    css`
        color: ${({theme}) => theme.green};
        font-size: 20px;
    `}
    ${({level}) =>
    level &&
    css`
        color: ${({theme}) => theme.yellow};
        text-transform: uppercase;
    `}
    ${({date}) =>
    date &&
    css`
        color: ${({theme}) => theme.greyL};
    `}
`;

const Card = () => (
    <StyledWrapper>
        <StyledImage src={plant} />
        <InnerWrapper>
            <StyledParagraph title>Pieniążek</StyledParagraph>
            <StyledParagraph level>medium</StyledParagraph>
            <StyledParagraph date>15/06/2019</StyledParagraph>
        </InnerWrapper>
    </StyledWrapper>
);

export default Card;