import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//MY IMPORTS
import Header from './containers/Header/Header';
import AboutUsContainer from './containers/AboutUs/AboutUsCont';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AboutUsContainer />
  </React.StrictMode>
);
reportWebVitals();
