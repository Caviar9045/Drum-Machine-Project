// Drum Machine - freeCodeCamp Project //
      // © Created by Caviar9045 //

      
import './App.css';
import React, { useState, useEffect } from 'react';
// Import sounds //

// Drums //
import qSound from './sounds/qiu.mp3'
import wSound from './sounds/w.mp3'
import eSound from './sounds/e.mp3'
import aSound from './sounds/a.mp3'
import sSound from './sounds/s.mp3'
import dSound from './sounds/d.mp3'
import zSound from './sounds/z.mp3'
import xSound from './sounds/x.mp3'
import cSound from './sounds/c.mp3'

// Piano //

import rSound from './sounds/do.mp3'
import r5Sound from './sounds/dos.mp3'
import tSound from './sounds/re.mp3'
import t6Sound from './sounds/res.mp3'
import ySound from './sounds/mi.mp3'
import uSound from './sounds/fa.mp3'
import u8Sound from './sounds/fas.mp3'
import iSound from './sounds/sol.mp3'
import i9Sound from './sounds/sols.mp3'
import oSound from './sounds/la.mp3'
import o0Sound from './sounds/las.mp3'
import pSound from './sounds/si.mp3'
import lSound from './sounds/do6.mp3'



const App = () => {

  // Default Colors // 
  const defaultColor = '#F0F0F0';
  const pressedColor = '#A8A8A8';
  const defaultColorPiano = '#FFFFFF';
  const pressedColorPiano = '#DFDFDF';
  const defaultColorPianoAccidentals = '#1b1b1e'
  const pressedColorPianoAccidentals = '#636363'

  const [buttonPressed, setButtonPressed] = useState(null);
  const [buttonColorMap, setButtonColorMap] = useState({

    // Drums //
    q: defaultColor,
    w: defaultColor,
    e: defaultColor,
    a: defaultColor,
    s: defaultColor,
    d: defaultColor,
    c: defaultColor,
    x: defaultColor,
    z: defaultColor,

    // Piano //
    r: defaultColorPiano,
    t: defaultColorPiano,
    y: defaultColorPiano,
    u: defaultColorPiano,
    i: defaultColorPiano,
    o: defaultColorPiano,
    p: defaultColorPiano,
    l: defaultColorPiano,

    5: defaultColorPianoAccidentals,
    6: defaultColorPianoAccidentals,
    8: defaultColorPianoAccidentals,
    6: defaultColorPianoAccidentals,
    9: defaultColorPianoAccidentals,
    0: defaultColorPianoAccidentals,

  });

  const handleKeyPress = (e) => {
    // Check if the pressed key matches the button label
    const button = document.querySelector(`button[data-key="${e.key.toUpperCase()}"]`);
    if (button) {
      // Simulate a button click
      button.click();
      if (buttonColorMap.hasOwnProperty(e.key.toLowerCase())) {
        let colorTo;
        switch (getInstrument(e.key)) {
          case 'drums':
            colorTo = pressedColor;
            break;
          case 'pianoNaturals':
            colorTo = pressedColorPiano;
            break;
          case 'pianoAccidentals':
            colorTo = pressedColorPianoAccidentals;
            break;
        }
        const newColorMap = {
          ...buttonColorMap,
          [e.key.toUpperCase()]: colorTo
        };
        setButtonColorMap(newColorMap);
      }
    }
  };
  const handleKeyUp = (e) => {
    const button = document.querySelector(`button[data-key="${e.key.toUpperCase()}"]`);
    if (button) {
      if (buttonColorMap.hasOwnProperty(e.key.toLowerCase())) {
        const newColorMap = {
          ...buttonColorMap,
          [e.key.toUpperCase()]: buttonColorMap[e.key.toLowerCase()]
        };
        setButtonColorMap(newColorMap);
      }
    }
  };
  useEffect(() => {
    // Add event listener to handle key presses
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('keydown', handleKeyPress);
      window.addEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleButtonClick = (e) => {
    // Get the audio element associated with the button
    const audio = e.target.querySelector('audio');
    if (audio) {
      // Play the audio
      audio.currentTime = 0; // Reset the audio to the beginning
      audio.play();
    }
    // Set the buttonPressed state to the button label
    setButtonPressed(e.target.getAttribute('data-key'));
  };
  function getInstrument(key) {
    let drums = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    let pianoNaturals = ["r", "t", "y", "u", "i", "o", "p", "l"];
    let pianoAccidentals = ["5", "6", "8", "9", "0"];
    if (drums.includes(key.toLowerCase())) {
      return 'drums';
    }
    else if (pianoNaturals.includes(key.toLowerCase())) {
      return 'pianoNaturals';
    }
    else if (pianoAccidentals.includes(key)) {
      return 'pianoAccidentals';
    }
    else {
      return null;
    }
  }
  function checkButtonLabel(key) {
    let src;
    switch (key) {
      case 'Q':
        src = qSound;
        break;
      case 'W':
        src = wSound;
        break;
      case 'E':
        src = eSound;
        break;
      case 'A':
        src = aSound;
        break;
      case 'S':
        src = sSound;
        break;
      case 'D':
        src = dSound;
        break;
      case 'Z':
        src = zSound;
        break;
      case 'X':
        src = xSound;
        break;
      case 'C':
        src = cSound;
        break;

      // PIANO //

      case 'R':
        src = rSound;
        break;
      case '5':
        src = r5Sound;
        break;
      case 'T':
        src = tSound;
        break;
      case '6':
        src = t6Sound;
        break;
      case 'Y':
        src = ySound;
        break;
      case 'U':
        src = uSound;
        break;
      case '8':
        src = u8Sound;
        break;
      case 'I':
        src = iSound;
        break;
      case '9':
        src = i9Sound;
        break;
      case 'O':
        src = oSound;
        break;
      case '0':
        src = o0Sound;
        break;
      case 'P':
        src = pSound;
        break;
      case 'L':
        src = lSound;
        break;
    }
    return src;
  }
  function checkBlackKey(key) {
    let txt = '';
    switch (key) {
      case '5':
        txt = 'C';
        break;
      case '6':
        txt = 'D';
        break;
      case '8':
        txt = 'F';
        break;
      case '9':
        txt = 'G';
        break;
      case '0':
        txt = 'A';
        break;
    }
    return txt;
  }
  function getNotebyKey(key) {
    let txt = '';
    switch (key) {

      // Drums //
      case 'Q':
        txt = '🥁 Kick';
        break;
      case 'W':
        txt = '🥁 Ride';
        break;
      case 'E':
        txt = '🥁 Snare';
        break;
      case 'A':
        txt = '🥁 Tom L';
        break;
      case 'S':
        txt = '🥁 Tom M';
        break;
      case 'D':
        txt = '🥁 Shake';
        break;
      case 'Z':
        txt = '🥁 Crash A';
        break;
      case 'X':
        txt = '🥁 Crash B';
        break;
      case 'C':
        txt = '🥁 Closed Hat';
        break;

      // Piano //
      case 'R':
        txt = '🎶 C5';
        break;
      case '5':
        txt = '🎶 C#';
        break;
      case 'T':
        txt = '🎶 D';
        break;
      case '6':
        txt = '🎶 D#';
        break;
      case 'Y':
        txt = '🎶 E';
        break;
      case 'U':
        txt = '🎶 F';
        break;
      case '8':
        txt = '🎶 F#';
        break;
      case 'I':
        txt = '🎶 G';
        break;
      case '9':
        txt = '🎶 G#';
        break;
      case 'O':
        txt = '🎶 A';
        break;
      case '0':
        txt = '🎶 A#';
        break;
      case 'P':
        txt = '🎶 B';
        break;
      case 'L':
        txt = '🎶 C6';
        break;
    }
    return txt;
  }

  return (
    <div className="Wrapper" id="drum-machine">
      <h1> 🎧 Drum pad 🎶</h1>
      <div id="display">
        <div className='drums'>
          {['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].map((key) => (
            <button
              key={key}
              data-key={key}
              onClick={handleButtonClick}
              className="drum-pad"
              id={"drum-pad-key-"+key}
              style={{ backgroundColor: buttonColorMap[key] }}
            >
              {key}
              <audio src={checkButtonLabel(key)} className="clip" id={key}/>
            </button>
          ))}
        </div>
        <div className='note-txt'>
          {buttonPressed && <p>{getNotebyKey(buttonPressed)}</p>}
        </div>
        <div id='piano' className='keyboard-container'>
          <div className='naturals-container'>
            {['R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L'].map((key) => (
              <button
                key={key}
                data-key={key}
                onClick={handleButtonClick}
                style={{ backgroundColor: buttonColorMap[key] }}
              >
                {key}
                <audio src={checkButtonLabel(key)} className="clip" />
              </button>
            ))}
          </div>
          <div className='accidentals-container'>
            {['5', '6', '8', '9', '0'].map((key) => (
              <button
                key={key}
                data-key={key}
                onClick={handleButtonClick}
                className={checkBlackKey(key)}
                style={{ backgroundColor: buttonColorMap[key] }}
              >
                {key}
                <audio src={checkButtonLabel(key)} className="clip" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
          <p className="footer-by">© Created by<a id="footer-a" href="https://github.com/Caviar9045" target="_blank"> Caviar9045 <i className="fa fa-github"></i></a></p>
      </div>
    </div>
  );
};

export default App;