import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { data as plants } from 'data/data';
import axios from 'axios';

export const PlantContext = React.createContext({
  galleryPhotos: [],
  addGalleryPhoto: () => {},
  setZoomPhoto: () => {},
  setPhotos: () => {},
  cards: [],
  addNewPlant: () => {},
});

const PlantProvider = ({ children }) => {
  const [galleryPhotos, setGalleryPhotos] = useState(plants);
  const [zoomPlant, setZoomPlant] = useState(null);
  const [nextPlant, setNextPlant] = useState(null);
  const [prevPlant, setPrevPlant] = useState(null);
  const [cards, setCards] = useState([]);

  const addGalleryPhoto = (formValues) => {
    setGalleryPhotos([formValues, ...galleryPhotos]);
  };
  const setZoomPhoto = (index) => {
    setZoomPlant(galleryPhotos[index].image);
  };
  const setPhotos = (index) => {
    if (index === 0) {
      setPrevPlant(null);
    } else {
      setPrevPlant(index - 1);
    }
    if (index === galleryPhotos.length - 1) {
      setNextPlant(null);
    } else {
      setNextPlant(index + 1);
    }
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
        setZoomPhoto,
        setPhotos,
        nextPlant,
        prevPlant,
        zoomPlant,
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
