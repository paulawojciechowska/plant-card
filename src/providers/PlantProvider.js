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
  // const [nextPlant, setNextPlant] = useState(null);
  // const [prevPlant, setPrevPlant] = useState(null);
  const [cards, setCards] = useState([]);

  const addGalleryPhoto = (formValues) => {
    setGalleryPhotos([formValues, ...galleryPhotos]);
  };
  const setZoomPhoto = (index) => {
    setZoomPlant(galleryPhotos[index].image);
  };
  // const setPhotos = (index) => {
  //   if (galleryPhotos[index + 1].image) setNextPlant(galleryPhotos[index + 1].image);
  //   if (galleryPhotos[index - 1].image) setPrevPlant(galleryPhotos[index - 1].image);
  // };
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
        // setPhotos,
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
