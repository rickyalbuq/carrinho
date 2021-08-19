import React from 'react';
import { ThemeProvider } from 'styled-components';
import useHandleTheme from './utils/useHandleTheme';

import GlobalStyle from './styles/globals';
import Home from './components/Home';

function App() {
  const { theme, handleTheme } = useHandleTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Home handleTheme={handleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
