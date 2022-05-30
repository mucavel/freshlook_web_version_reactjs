import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//MY IMPORTS
import Header from './containers/Header/Header'; 
import AboutUs from './containers/AboutUs/AboutUs';
import Services from './containers/Services/Services';
import Coments from './containers/Coments/Coments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AboutUs />
    <Services />
    <Coments />
  </React.StrictMode>
);
reportWebVitals();
