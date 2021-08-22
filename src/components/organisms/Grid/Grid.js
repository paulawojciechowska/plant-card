import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import { PlantContext } from 'providers/PlantProvider';
import { StyledWrapper } from './Grid.styled';

const Grid = ({ handleOpenPlantDetails }) => {
  const { cards } = useContext(PlantContext);
  return (
    <StyledWrapper>
      {cards.map((item) => (
        <Card
          onClick={() => handleOpenPlantDetails(item.id, item.name, item.image)}
          image={item.image}
          name={item.name}
          level={item.level}
          date={item.date}
          key={item.id}
        />
      ))}
    </StyledWrapper>
  );
};
Grid.propTypes = {
  handleOpenPlantDetails: PropTypes.func.isRequired,
};

export default Grid;
