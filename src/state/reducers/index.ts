import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import themeReducer from './themeReducer';
import productReducer from './productReducer';

const reducers = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
  product: productReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
