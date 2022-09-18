import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import App from './App';
import plant from './src/Components/component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode > 
    <App />
  </React.StrictMode>
  <h1>{plant()}</h1>
  </>,
  
);
