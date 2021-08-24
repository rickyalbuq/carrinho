import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globals';
import useHandleTheme from './utils/useHandleTheme';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import intl from 'react-intl-universal';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const Routes: React.FC = () => {
  const { theme, handleTheme } = useHandleTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={intl.get('routes.home')} exact>
            <Home handleTheme={handleTheme} />
          </Route>
          <Route path={intl.get('routes.dashboard')}>
            <Dashboard />
          </Route>
          <Route path={intl.get('routes.product', { id: '' })}>
            <ProductDetail />
          </Route>
          <Route path={intl.get('routes.error')}>
            <Error status="404" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
