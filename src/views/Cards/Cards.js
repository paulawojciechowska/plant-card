import React from 'react';
import PlantForm from 'components/organisms/PlantFrom/PlantForm';
import ButtonAdd from 'components/atoms/ButtonAdd/ButtonAdd';
import Grid from 'components/organisms/Grid/Grid';
import PlantProvider from 'providers/PlantProvider';
import cat from 'assets/illustration/cat.svg';
import PlantDetailModal from 'components/organisms/PlantDetailModal/PlantDetailModal';
import useModal from 'hooks/useModal';
import { StyledWrapper, Column, TextWrapper, StyledParagraph, StyledImage } from './Cards.styles'; 

const Cards = () => {
    // const [isDetailedCard, setDetailedCard] = useState(false);
    const [isModalOpen, handleOpenModal, handleCloseModal] = useModal();
    const [isFormOpen, handleOpenForm, handleCloseForm] = useModal();
    

    const handleOpenPlantDetails = (id) => {
        console.log(id);
        handleOpenModal();
    }
    return (
        <PlantProvider>
            <>
            { isFormOpen ? <PlantForm handleClose={handleCloseForm}/> : null}
        <StyledWrapper>
            <Column>
            {isModalOpen ? <PlantDetailModal isOpen={isModalOpen} handleClose={handleCloseModal}/> : null}
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