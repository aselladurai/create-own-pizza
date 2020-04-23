import { createStore } from 'redux';
import priceReducer from '../reducers/priceReducer';

export default createStore(priceReducer);