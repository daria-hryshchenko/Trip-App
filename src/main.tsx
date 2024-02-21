import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import GlobalStyle from './GlobalStyles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Trip-App/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);