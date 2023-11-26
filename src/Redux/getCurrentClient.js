import axios from 'axios';

// Action Types
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

// Action Creators
export const fetchCurrentUserSuccess = (userData) => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    payload: userData,
});

export const fetchCurrentUserFailure = (error) => ({
    type: FETCH_CURRENT_USER_FAILURE,
    payload: error,
});

// Async Action Creator - Fetch Current User Data
export const fetchCurrentUser = () => async (dispatch) => {
    try {
        const response = await axios.get('https://bizhub-8955b30ff7e1.herokuapp.com/account/current-user/');

        // Assuming the response contains the current user data
        const currentUserData = response.data;
        console.log(currentUserData);

        dispatch(fetchCurrentUserSuccess(currentUserData)); // Dispatch success action with current user data
    } catch (error) {
        console.error('Error fetching current user:', error);
        dispatch(fetchCurrentUserFailure(error)); // Dispatch failure action with error payload
    }
};

// Initial State
const initialState = {
    clientData: null,
    error: null,
};

// Reducer Function
export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                clientData: action.payload,
                error: null,
            };
        case FETCH_CURRENT_USER_FAILURE:
            return {
                ...state,
                clientData: null,
                error: action.payload,
            };
        default:
            return state;
    }
};