import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Card from 'components/molecules/Card/Card';
import Icon from 'assets/icons/leaves.svg';
import cat from 'assets/illustration/cat.svg';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
`;
const Column = styled.div`
    height: 615px;
    padding: 5px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
}
`;
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;
const StyledHeading = styled(Heading)`
    font-size: 27px;
    text-transform: uppercase;
    margin-right: 15px;
`;
const TextWrapper = styled.div`
    margin: 25px 0;
`;
const StyledParagraph = styled(Paragraph)`
    font-size: 20px;
`;
const StyledImage = styled.img`
    position: absolute;
    width: 28%;
    height: auto;
    bottom: 5px;
    right: 20px;
`;
const Cards = () => (
    <StyledWrapper>
        <Column>
            <Card />
        </Column>
        <Column>
            <Heading>Column2</Heading>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
        </Column>
        <Column>
            <StyledDiv>
                <StyledHeading>Add new plant</StyledHeading>
                <ButtonIcon icon={Icon} />
            </StyledDiv>
            <TextWrapper>
                <StyledParagraph>Define basic   information like name,</StyledParagraph>
                <StyledParagraph>arrive day and care    difficulty.</StyledParagraph>
            </TextWrapper>
            <TextWrapper>
                <StyledParagraph>Make custom notes, mark water</    StyledParagraph>
                <StyledParagraph>and sunlight demand.</StyledParagraph>
            </TextWrapper>
            <StyledParagraph grey>Check what your plant needs<br/> at anytime.</StyledParagraph>
            <StyledImage src={cat} alt='cat'/>
        </Column>
    </StyledWrapper>
);

export default Cards;