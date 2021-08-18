import React from 'react';
import LoginModal from 'components/organisms/LoginModal/LoginModal';
import Background from 'assets/illustration/shape.svg';
import Girl from 'assets/illustration/girl.svg';
import useModal from 'hooks/useModal';
import { StyledWrapper, TextWrapper, StyledParagraph, StyledLink, StyledIllustration, StyledBackground, Break } from './Home.styles';

const Home = () => {
  const [isModalOpen, handleOpenModal, handleCloseModal] = useModal();
  return (
    <StyledWrapper>
      <LoginModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      <TextWrapper>
        <StyledParagraph>
          Web application created to help You <Break /> taking care of your plants.
        </StyledParagraph>
      </TextWrapper>
      <TextWrapper>
        <StyledParagraph grey>Make helpful fishcards</StyledParagraph>
        <StyledParagraph grey>Build photo gallery </StyledParagraph>
      </TextWrapper>
      <TextWrapper>
        <StyledLink onClick={handleOpenModal}>LOG IN</StyledLink>
      </TextWrapper>
      {!isModalOpen && <StyledIllustration src={Girl} />}
      <StyledBackground src={Background} />
    </StyledWrapper>
  );
};

export default Home;
