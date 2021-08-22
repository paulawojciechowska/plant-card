import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { cards as cardData } from 'data/data';

export const PlantContext = React.createContext({
  cards: [],
  addNewPlant: () => {},
});

const PlantProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const addNewPlant = (formValues) => {
    setCards([formValues, ...cards]);
  };
  useEffect(() => {
    axios
      .get('/plants')
      .then(({ data }) => setCards(data.plants))
      .catch((err) => console.log(err));
  }, []);
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
};
export default PlantProvider;
