import React from 'react';
import useTranslation from './utils/useTranslation';

import Routes from './routes';

function App() {
  const loading = useTranslation();

  return (
    <>
      {!loading ? (
        <div className="App">
          <Routes />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
