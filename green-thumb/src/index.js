import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import App from './App';
import plant from './component.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1 className='font'>Welcome to GreenThumb<p className='good'>"you don't need a green thumb to grow them"</p></h1>
  <h1>{plant()}</h1>
  </>,
  <React.StrictMode > 
    <App />
  </React.StrictMode>
);
