// apiService.js

import axios from 'axios';

export const fetchCurrentUser = async () => {
  try {
    const token = localStorage.getItem('bizToken'); // Retrieve the token from local storage

    if (!token) {
      throw new Error('Token not found');
    }

    const response = await axios.get('https://bizhub-8955b30ff7e1.herokuapp.com/account/current-user/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    
    return response.data;
  } catch (error) {
    throw new Error('Error fetching current user');
  }
};
