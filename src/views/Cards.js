import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Grid from 'components/organisms/Grid/Grid';
import Icon from 'assets/icons/leaves.svg';
import cat from 'assets/illustration/cat.svg';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    column-gap: 10px;
    @media only screen and (max-width: 1150px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    }
`;
const Column = styled.div`
    /* width: 500px; */
    height: 615px;
    padding: 5px;
    overflow: auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    ::-webkit-scrollbar {
        width: 15px;
        border-radius: 15px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

        @media only screen and (max-width: 900px) {
            background: transparent;
            width: 0;
            overflow: visible;
        }
    }
    ::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.green};
      border-radius: 15px;
      @media only screen and (max-width: 900px) {
        background: transparent;
        }
    }
    @media only screen and (max-width: 900px) {
        height: auto;
        display: flex;
        flex-direction: column;
        }
`;
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 900px) {
        justify-content: center;
        }
`;
const StyledHeading = styled(Heading)`
    font-size: 27px;
    text-transform: uppercase;
    margin-right: 15px;
`;
const TextWrapper = styled.div`
    margin: 25px 0;
    @media only screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        }
`;
const StyledParagraph = styled(Paragraph)`
    font-size: 20px;
    @media only screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        }
`;
const StyledImage = styled.img`
    max-height: 70%; 
    max-width: 70%;
    padding: 20px;
    margin: 0 auto;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;
const Cards = () => (
    <StyledWrapper>
        <Column>
            <Grid/>
        </Column>
        <Column>
            <StyledDiv>
                <StyledHeading>Add new plant</StyledHeading>
                <ButtonIcon icon={Icon} />
            </StyledDiv>
            <TextWrapper>
                <StyledParagraph>Define basic information like name, </StyledParagraph>
                <StyledParagraph>arrive day and care difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Make custom notes, mark water</    StyledParagraph>
                <StyledParagraph>and sunlight demand.</StyledParagraph>
            </TextWrapper>
            <StyledParagraph grey>Check what your plant needs at anytime.</StyledParagraph>
            <StyledImage src={cat} alt='cat'/>
        </Column>
    </StyledWrapper>
);

export default Cards;