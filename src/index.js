import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './store';
import StoreContext from './store-context';

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={Store}>
      <Router>
        <App />
      </Router>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
