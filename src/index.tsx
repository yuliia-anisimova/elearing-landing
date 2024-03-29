import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import { ThemeProvider } from './providers/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
