import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cards as cardData } from 'data/data';

export const PlantContext = React.createContext({
    cards: [],
    addNewPlant: () => {},
});

const PlantProvider = ({ children }) => {

    const [cards, setCards] = useState([...cardData]);
    const addNewPlant = (formValues) => {
      setCards([formValues, ...cards]);
    };
    return (
      <PlantContext.Provider
        value={{
          cards,
          addNewPlant,
        }}
      >
        {children}
      </PlantContext.Provider>
    );
};

PlantProvider.propTypes = {
    children: PropTypes.element.isRequired,
}
export default PlantProvider;