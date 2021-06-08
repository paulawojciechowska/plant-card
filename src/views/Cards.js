import React, { useState } from 'react';
import styled from 'styled-components';
import DetailModal from 'components/organisms/DetailModal/DetailModal';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import Grid from 'components/organisms/Grid/Grid';
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
    height: 615px;
    padding: 5px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 6px;
        border-radius: 3px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.15);

        @media only screen and (max-width: 900px) {
            background: transparent;
            width: 0;
            overflow: visible;
        }
    }
    ::-webkit-scrollbar-thumb {
        border: 1.5px solid transparent;
        width: 6px;
        background: ${({theme}) => theme.greyD};
        border-radius: 3px;
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

const TextWrapper = styled.div`
    margin: 25px 0;
    @media only screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 10px 0;
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
const Cards = () => {
    const [isDetailedCard, setDetailedCard] = useState(false);
    return (
        <>
        { isDetailedCard && <DetailModal isDetailedCard={isDetailedCard} setDetailedCard={setDetailedCard}/> }
        <StyledWrapper>
            <Column>
                <Grid/>
            </Column>
            <Column>
                <ButtonAdd isOpen={isDetailedCard} openModal={setDetailedCard}/>
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
        </>
    )
};

export default Cards;