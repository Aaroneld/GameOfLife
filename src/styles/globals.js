import { createGlobalStyle } from "styled-components";

import ThinDesign from "../assets/fonts/ThinDesign.woff2";
import Monoid from "../assets/fonts/Monoid-Regular.woff2";
import Amarillo from "../assets/fonts/Amarillo.woff2";
import Astrodings from "../assets/fonts/Astrodings.woff2";
import Enochian from "../assets/fonts/enochian.woff2";
import HamburgSymbols from "../assets/fonts/HamburgSymbols.woff2";
import KalocsaiFlowers from "../assets/fonts/Kalocsai_Flowers.ttf";
import MoonPhases from "../assets/fonts/moon_phases.woff2";

export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1025,
  laptopL: 1440,
  desktop: 1800,
};

export const deviceSize = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};

export const GlobalStyle = createGlobalStyle`
  
    @font-face {
      font-family: 'ThinDesign';
      src: local('ThinDesign'), local('Thin Design'),
           url(${ThinDesign}) format('truetype');
    }
  
    @font-face {
      font-family: 'Monoid';
      src: local('Monoid'),
      url(${Monoid}) format('truetype');;
    }
  
    @font-face {
      font-family: 'Amarillo';
      src: local('Amarillo'),
      url(${Amarillo}) format('truetype');;
    }
  
    @font-face {
      font-family: 'Astrodings';
      src: local('Astrodings'),
      url(${Astrodings}) format('truetype');;
    }

    @font-face {
      font-family: 'moon_phases';
      src: local('moon_phases'),
      url(${MoonPhases}) format('truetype');;
    }

    @font-face {
      font-family: 'enochian';
      src: local('enochian'),
      url(${Enochian}) format('truetype');;
    }

    @font-face {
      font-family: 'Kalocsai_Flowers';
      src: local('Kalocsai_Flowers'),
      url(${KalocsaiFlowers}) format('truetype');;
    }

    @font-face {
      font-family: 'HamburgSymbols';
      src: local('HamburgSymbols'),
      url(${HamburgSymbols}) format('truetype');;
    }

    *, p, button, h2, h1, h3, h4 {
      font-family: 'Monoid';
    }
  
    .app {

     
      max-height: 100vh;

  
      #canvas { grid-area: canvas; }
      #settings { grid-area: settings; }
      #toolbar { grid-area: toolbar; }
      #rules { grid-area: rules; }
  
      @media ${deviceSize.tablet} {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
          "toolbar toolbar"
          "canvas settings"
          "rules rules";
  
      }
  
      @media ${deviceSize.laptop} {
        overflow-y: hidden;
        display: grid;
        grid-template-columns: 45% 20% 35%;
        gap: 0px 0px;
        grid-template-areas:
          "toolbar toolbar toolbar"
          "canvas settings rules";
  
  
      }
  
      @media ${deviceSize.desktop} {
        grid-template-columns: 40% 20% 40%
      }
      
    }
  
  `;
