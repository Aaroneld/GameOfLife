import { useState } from 'react';
import './App.css';
import { Reset } from 'styled-reset';
import { GlobalStyle } from './styles/globals';

import Toolbar from './components/toolbar';
import CanvasContainer from './components/canvas-container';
import SettingsInterface from './components/settings-interface';
import Rules from './components/rules';

import { fontCollection, colorThemes } from './animations/resources';


function App() {

  const currentFont = useState('HamburgSymbols');
  const currentTheme = useState('autumn');
  const currentPreset = useState('none');

  const [ranVar, triggerRandom] = useState(0);

  return (
  
    <div className="app">
      <Reset />
      <GlobalStyle />
      <div id="toolbar">
        <Toolbar />
      </div>
      <div id="canvas">
        <CanvasContainer 
          cFont={currentFont[0]}
          cTheme={currentTheme[0]}
          cPreset={currentPreset[0]}
          ranVar={ranVar}
        />
      </div>
      <div id="settings">
        <SettingsInterface 
        cPreset={currentPreset}
        cFont={currentFont}
        cTheme={currentTheme}
        fonts={fontCollection}
        colors={colorThemes}
        triggerRandom={triggerRandom}
        ranVar={ranVar}
        />
      </div>
      <div id="rules">
        <Rules />
      </div>
    </div>
  );
}

export default App;
