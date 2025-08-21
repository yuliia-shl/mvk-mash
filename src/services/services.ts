import axios from 'axios';
import { API_URL } from '../constants/api';

// Get Hero information
export const fetchHeroInfo = async () => {
  const response = await axios.get(`${API_URL}/api/heroes?populate=*`);
  return response.data.data;
};

// Get Modules (smart lockers) information
export const fetchModules = async () => {
  const response = await axios.get(
    `${API_URL}/api/lockers?populate=lockers.picture`
  );
  return response.data.data[0];
};
