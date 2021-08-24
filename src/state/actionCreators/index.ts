import axios from 'axios';
import { Action, Dispatch } from 'redux';
import { Item } from '../../utils/common';
import { ActionType } from '../Actions';

export const getProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    const response = await axios.get(
      'https://gist.githubusercontent.com/viniciustodesco/e283682c99e38b7b8f09b6a44d1a3793/raw/84db85764c6a21ce8cfd67598e9afec258aeda45/products.json',
    );

    dispatch({
      type: ActionType.GET_PRODUCT,
      payload: response?.data?.products || [],
    });
  };
};

export const addToCart = (item: Item) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_ITEM,
      payload: item,
    });
  };
};

export const increaseAmount = (item: Item) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREASE_AMOUNT,
      payload: item,
    });
  };
};

export const handleTheme = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HANDLE_THEME,
    });
  };
};
