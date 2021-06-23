import React, { useState } from 'react';
import LoginModal from 'components/organisms/LoginModal/LoginModal';
import Background from 'assets/illustration/shape.svg';
import Girl from 'assets/illustration/girl.svg';
import { StyledWrapper, TextWrapper, StyledParagraph, StyledLink, StyledIllustration, StyledBackground, Break } from './Home.styles';

const Home = () => {
    const [isVisible, setVisibility] = useState(false);
    return (
        <StyledWrapper>
        { isVisible && <LoginModal isVisible={isVisible} setVisibility={setVisibility}/> }
        <TextWrapper>
            <StyledParagraph>Web application created to help You <Break/> taking care of your plants.</StyledParagraph>
        </TextWrapper>
        <TextWrapper>
            <StyledParagraph grey>Make helpful fishcards</StyledParagraph>
            <StyledParagraph grey>Build photo gallery </StyledParagraph>
        </TextWrapper>
        <TextWrapper>
            <StyledLink onClick={() => setVisibility(!isVisible)}>LOG IN</StyledLink>
        </TextWrapper>
        <StyledIllustration src={Girl} />
        <StyledBackground src={Background}/>
    </StyledWrapper>
    )
};

export default Home;