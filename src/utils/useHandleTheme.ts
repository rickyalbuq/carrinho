import { useCallback } from 'react';
import { DefaultTheme } from 'styled-components';
import usePersistedState from './usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface Response {
  handleTheme(): void;
  theme: DefaultTheme;
}

const useHandleTheme = (): Response => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const handleTheme = useCallback(() => {
    setTheme((prev) => (prev.title === 'light' ? dark : light));
  }, [setTheme]);

  return { theme, handleTheme };
};

export default useHandleTheme;
