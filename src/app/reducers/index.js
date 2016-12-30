// root reducer

import { combineReducers } from 'redux';
import productsReducer from './products';
import chosenReducer from './chosenshirt';
import galleryReducer from './gallery';

export default combineReducers({
  products: productsReducer,
  chosen: chosenReducer,
  gallery: galleryReducer
});
