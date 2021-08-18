import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { cards } from 'data/data';
import Card from 'components/molecules/Card/Card';
import { PlantContext } from 'providers/PlantProvider';

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Grid = ({handleOpenPlantDetails}) => {
    const {cards} = useContext(PlantContext);
    return (
        <StyledWrapper>
            {cards.map(item => (
                <Card onClick={() => handleOpenPlantDetails(item.id, item.name, item.image)}
                    image={item.image}
                    name={item.name}
                    level={item.level}
                    date={item.date}
                    key={item.id}
                    />
            ))}
        </StyledWrapper>
    );
}
Grid.propTypes = {
    handleOpenPlantDetails: PropTypes.func.isRequired,
}

export default Grid;