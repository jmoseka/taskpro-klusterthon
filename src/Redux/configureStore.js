import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from './getCurrentClient';


const rootReducer = combineReducers({
    client: clientReducer,
    
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;