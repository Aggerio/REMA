import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './reducers/shopping_cart';
import navReducer from './reducers/nav';
import userReducer from './reducers/user';

export default configureStore({
  reducer: {
    cart: storeReducer, 
    nav: navReducer,
    auth: userReducer
  },
})
