import { DefaultTheme } from 'styled-components';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { Action, ActionType } from '../Actions';

const reducer = (state: DefaultTheme = dark, action: Action) => {
  switch (action.type) {
    case ActionType.HANDLE_THEME:
      return state.title === 'light' ? dark : light;
    default:
      return state;
  }
};

export default reducer;
