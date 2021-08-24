import React from 'react';
import { Provider } from 'react-redux';
import useTranslation from './utils/useTranslation';

import Routes from './routes';
import store from './state/store';

function App() {
  const loading = useTranslation();

  return (
    <>
      {!loading ? (
        <Provider store={store}>
          <div className="App">
            <Routes />
          </div>
        </Provider>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
