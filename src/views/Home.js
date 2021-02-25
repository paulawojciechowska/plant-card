import React from 'react';
import styled from 'styled-components';
// import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Background from 'assets/illustration/main.svg';

const StyledWrapper = styled.div`
    position: relative;
    width: 100vw;
`;
const StyledBackground = styled.div`
    position: absolute;
    background: url(${Background});
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-position: right bottom;
    bottom: -650px;
    background-size: 100%;
`;
const Home = () => (
    <StyledWrapper>
        {/* <Paragraph>Web application created to help You</Paragraph>
        <Paragraph>taking care of your plants.</Paragraph>
        <Paragraph grey>Make helpful fishcards</Paragraph>
        <Paragraph grey>Build photo gallery </Paragraph> */}
        <StyledBackground />
    </StyledWrapper>
);

export default Home;