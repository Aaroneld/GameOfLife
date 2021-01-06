import React, { useState } from 'react'

import Container from '../styles/settings-interface';

import makeThemeGradient from '../utils/makeThemeGradient';

import glider from '../assets/images/glider.gif';
import smexploder from '../assets/images/smexploder.gif';
import exploder from '../assets/images/exploder.gif';



export default function SettingsInterface({fonts, colors , cPreset, cFont, cTheme, triggerRandom, ranVar}) {

    const [currentFont, setCurrentFont] = cFont;
    const [currentTheme, setCurrentTheme] = cTheme;
    const [preset, setPreset] = cPreset;

    const handleThemeSelect = e => {
        setCurrentTheme(e.target.value);
    }

    const handleFontSelect = e => {
        setCurrentFont(e.target.value);
    }

    const handleRandomize = e => {

        e.preventDefault();
        triggerRandom(ranVar === 0 ? 1 : 0);
    }

    const handleSelectPreset = e => {

        e.preventDefault();
        setPreset(e.target.value);
    }

    const images = {
        None: false, 
        Exploder: exploder, 
        Glider: glider,
        "Small Exploder": smexploder
    };

    return (
        <Container>

            <div>
                <label htmlFor="permutationSelector">Select Initial State</label>
                <select 
                    onChange={handleSelectPreset} 
                    name="permutationSelector"
                    style={{
                        backgroundImage: `url(${images[preset]})`,
                        backgroundPosition: 'center',
                        backgroundSize: '25%',
                        
                        color: `${preset !== "none" ? 'transparent' : 'white'}`
                    }}
                    >
                    {Object.keys(images).map(preset => (
                        <option 
                            value={preset} 
                            style={{
                                color: "white",
                                textTransfrom: "capitalize",
                            }}
                            >{preset}</option>
                    ))}
                </select >
            </div>

            <div>
                <label htmlFor="colorTheme">Select Color Theme</label>
                <select 
                onChange={handleThemeSelect} 
                name="colorTheme"
                id="colorSelector"
                style={{
                    backgroundImage: `${makeThemeGradient(colors[currentTheme])}`}}
                >
                    <option value="" selected disabled hidden />
                    {Object.keys(colors).map( theme => 
                        <option value={theme}>{theme}</option>
                    )};
                   
                </select>
            </div>

            <div>
                <label htmlFor="chooseFontFace">Select Font Face</label>
                <select 
                    onChange={handleFontSelect} 
                    name="chooseFontFace"
                    value={currentFont}
                    style={{fontFamily:`${currentFont}`}}>
                    {Object.keys(fonts).map(font => 
                    <option 
                        value={font}
                        style={{fontFamily: `${font}`}}
                    >{fonts[font][10] + fonts[font][1] + fonts[font][2] + fonts[font][3] + fonts[font][4]}</option>)}
                </select>
            </div>
            
            <button onClick={handleRandomize}>Randomize</button>
        </Container>
    )
}
