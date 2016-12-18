// root reducer

import { combineReducers } from 'redux';
import productsReducer from './products.js';
import chosenReducer from './chosenshirt.js'


export default combineReducers({
  products: productsReducer,
  chosen: chosenReducer
})
