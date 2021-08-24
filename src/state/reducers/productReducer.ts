import { Product } from '../../utils/common';
import { Action, ActionType } from '../Actions';

const reducer = (state: Array<Product> = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_PRODUCT:
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
