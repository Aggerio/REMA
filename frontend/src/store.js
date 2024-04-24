import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './reducers/shopping_cart';

export default configureStore({
  reducer: {
    cart: storeReducer, 
  },
})
