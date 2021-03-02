import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Background from 'assets/illustration/shape.svg';
import Girl from 'assets/illustration/girl.svg';

const StyledWrapper = styled.div`
    /* position: relative; */
    width: 100vw;
`;
const TextWrapper = styled.div`
    margin: 35px 0;
`;
const StyledBackground = styled.div`
    position: absolute;
    background: url(${Background});
    width: 100vw;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: -200px;
    background-size: 100%;
    z-index: -5;
`;
const StyledIllustration = styled.img`
    position: absolute;
    width: 630px;
    height: 630px;
    background-repeat: no-repeat;
    background-size: cover;
    right: 100px;
    bottom: 20px;
    background-size: 100%;
    z-index: 9999;

    @media only screen and (max-width: 1200px) {
        width: 520px;
        height: 520px;
    }
`;
const StyledParagraph = styled(Paragraph)`
    padding-left: 52px;
`;
const StyledLink = styled.a`
    color: ${({theme}) => theme.green};
    margin-top: 35px;
    padding-left: 52px;
    font-size: 30px;
    font-weight: ${({theme}) => theme.bold};
`;
const Home = () => (
    <StyledWrapper>
        <TextWrapper>
            <StyledParagraph>Web application created to help You</StyledParagraph>
            <StyledParagraph>taking care of your plants.</StyledParagraph>
        </TextWrapper>
        <TextWrapper>
        <StyledParagraph grey>Make helpful fishcards</StyledParagraph>
            <StyledParagraph grey>Build photo gallery </StyledParagraph>
        </TextWrapper>  
        <StyledLink>LOG IN</StyledLink>
        <StyledIllustration src={Girl} />
        <StyledBackground />
    </StyledWrapper>
);

export default Home;