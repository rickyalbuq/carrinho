import { Item, Product } from '../../utils/common';

export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  GET_PRODUCT = 'GET_PRODUCT',
  HANDLE_THEME = 'HANDLE_THEME',
}

export interface getProducts {
  type: ActionType.GET_PRODUCT;
  payload: Array<Product>;
}

export interface addToCart {
  type: ActionType.ADD_ITEM;
  payload: Item;
}

export interface increaseAmount {
  type: ActionType.INCREASE_AMOUNT;
  payload: Item;
}

export interface handleTheme {
  type: ActionType.HANDLE_THEME;
}

export type Action = getProducts | addToCart | increaseAmount | handleTheme;
