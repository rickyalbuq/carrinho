import { Item } from '../../utils/common';
import { Action, ActionType } from '../Actions';

const reducer = (state: Array<Item> = [], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      const { sku, amount, product } = action.payload;

      let newArray: Array<Item> = [];
      let hasChange: boolean = false;

      if (state.length > 0) {
        newArray = state.map((item) => {
          if (item?.sku === sku) {
            item.amount += 1;
            hasChange = true;
          }
          return item;
        });

        return (state = hasChange
          ? newArray
          : [...state, { sku, amount, product }]);
      }
      return [{ sku, amount, product }];

    case ActionType.INCREASE_AMOUNT:
      let otherArray: Array<Item> = [];

      otherArray = state.filter((item) => {
        if (item?.sku !== action.payload.sku) {
          return item;
        } else {
          if (action.payload.amount > 0) {
            item.amount = action.payload.amount;
            return item;
          } else {
            return false;
          }
        }
      });
      return (state = otherArray);

    default:
      return state;
  }
};

export default reducer;
