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
    @media only screen and (max-width: 600px) {
        margin: 15px 0;
    }
`;
const StyledBackground = styled.img`
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
const StyledIllustration = styled.img`
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
const StyledParagraph = styled(Paragraph)`
    padding-left: 52px;
    
    @media only screen and (max-width: 1200px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 820px) {
        font-size: 25px;
    }
`;
const StyledLink = styled.a`
    color: ${({theme}) => theme.green};
    margin-top: 35px;
    padding-left: 52px;
    font-size: 30px;
    font-weight: ${({theme}) => theme.bold};
    z-index: 99999;
`;
const Break = styled.br`
    @media only screen and (max-width: 550px) {
        display: none !important;
    }
`;
const Home = () => (
    <StyledWrapper>
        <TextWrapper>
            <StyledParagraph>Web application created to help You <Break/> taking care of your plants.</StyledParagraph>
        </TextWrapper>
        <TextWrapper>
            <StyledParagraph grey>Make helpful fishcards</StyledParagraph>
            <StyledParagraph grey>Build photo gallery </StyledParagraph>
        </TextWrapper>
        <TextWrapper>
            <StyledLink>LOG IN</StyledLink>
        </TextWrapper>
        <StyledIllustration src={Girl} />
        <StyledBackground src={Background}/>
    </StyledWrapper>
);

export default Home;