import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { data as plants } from 'data/data';
import axios from 'axios';

export const PlantContext = React.createContext({
  galleryPhotos: [],
  addGalleryPhoto: () => {},
  cards: [],
  addNewPlant: () => {},
});

const PlantProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState(plants);

  const addGalleryPhoto = (formValues) => {
    setGalleryPhotos([formValues, ...galleryPhotos]);
  };
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
        galleryPhotos,
        addGalleryPhoto,
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
