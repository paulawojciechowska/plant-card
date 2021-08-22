import { useCallback } from 'react';
import axios from 'axios';

export const usePlant = () => {
  const getPlantById = useCallback(async (id) => {
    try {
      const result = await axios.get(`/plants/${id}`);
      return result.data.plants[0];
    } catch (e) {
      console.log(e);
    }
  }, []);
  return {
    getPlantById,
  };
};
