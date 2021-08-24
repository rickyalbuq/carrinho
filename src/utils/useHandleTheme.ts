import { DefaultTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from './../state/actionCreators/index';
import { State } from '../state/reducers';

interface Response {
  handleTheme(): void;
  theme: DefaultTheme;
}

const useHandleTheme = (): Response => {
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);
  const { handleTheme } = bindActionCreators(ActionCreators, dispatch);

  return { theme, handleTheme };
};

export default useHandleTheme;
