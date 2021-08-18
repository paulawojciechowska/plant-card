import React from 'react';
import PlantForm from 'components/organisms/PlantFrom/PlantForm';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import Grid from 'components/organisms/Grid/Grid';
import PlantProvider from 'providers/PlantProvider';
import cat from 'assets/illustration/cat.svg';
import Modal from 'components/organisms/Modal/Modal';
import PlantDetails from 'components/organisms/PlantDetails/PlantDetails';
import useModal from 'hooks/useModal';
import { StyledWrapper, Column, TextWrapper, StyledParagraph, StyledImage } from './Cards.styles'; 

const Cards = () => {
    const [isModalOpen, handleOpenModal, handleCloseModal] = useModal();
    const [isFormOpen, handleOpenForm, handleCloseForm] = useModal();
    

    const handleOpenPlantDetails = (id) => {
        console.log(id);
        handleOpenModal();
    }
    return (
        <PlantProvider>
            <>
        <Modal isOpen={isFormOpen} handleClose={handleCloseForm}><PlantForm /></Modal>
        <StyledWrapper>
            <Column>
            <Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
                <PlantDetails/>
            </Modal>
                <Grid handleOpenPlantDetails={handleOpenPlantDetails} />
            </Column>
            <Column>
                <ButtonAdd openModal={handleOpenForm}/>
                <TextWrapper>
                    <StyledParagraph>Define basic information like name, </StyledParagraph>
                    <StyledParagraph>arrive day and care difficulty.</StyledParagraph>
                </TextWrapper>
                <TextWrapper>
                    <StyledParagraph>Make custom notes, mark water</StyledParagraph>
                    <StyledParagraph>and sunlight demand.</StyledParagraph>
                </TextWrapper>
                <StyledParagraph grey>Check what your plant needs at anytime.</StyledParagraph>
                <StyledImage src={cat} alt='cat'/>
            </Column>
        </StyledWrapper>
            </>
        </PlantProvider>
    )
};

export default Cards;