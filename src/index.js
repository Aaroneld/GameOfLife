import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './assets/fonts/fonts.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

WebFont.load({
  custom: { 
    families: [
    'ThinDesign', 
    'Monoid', 
    'Amarillo',
    'HamburgSymbols',
    'Astrodings',
    'enochian',
    'Kalocsai_Flowers',
    'moon_phases'],
    urls: ['/assets/fonts.css']
  },
  active: () => {
    console.log('loaded', document.fonts.check('12px ThinDesign'));
    console.log('loaded', document.fonts.check('12px Monoid'));
    console.log('loaded', document.fonts.check('12px Amarillo'));
    console.log('loaded', document.fonts.check('12px HamburgSymbols'));
    console.log('loaded', document.fonts.check('12px Astrodings'));
    console.log('loaded', document.fonts.check('12px enochian'));
    console.log('loaded', document.fonts.check('12px Kalocsai_Flowers'));
    console.log('loaded', document.fonts.check('12px moon_phases'));
  },
  inactive: () => {
    console.log(document.fonts.check('12px ThinDesign'));
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
