import axios from 'axios';

// Action Type
export const CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS';
export const CREATE_CLIENT_FAILURE = 'CREATE_CLIENT_FAILURE';

// Action Creators
export const createClientSuccess = (client) => ({
  type: CREATE_CLIENT_SUCCESS,
  payload: client,
});

export const createClientFailure = (error) => ({
  type: CREATE_CLIENT_FAILURE,
  payload: error,
});

// Async Action Creator - Sends data to API
export const createClientAndSendToAPI = (clientData) => async (dispatch) => {
  try {
    const response = await axios.post('https://bizhub-8955b30ff7e1.herokuapp.com/client', clientData);

    // Assuming the response contains the newly created client data
    const createdClient = response.data;
    console.log(createdClient);
    dispatch(createClientSuccess(createdClient)); // Dispatch success action with created client data
  } catch (error) {
    console.error('Error creating client:', error);
    dispatch(createClientFailure(error)); // Dispatch failure action with error payload
  }
};
