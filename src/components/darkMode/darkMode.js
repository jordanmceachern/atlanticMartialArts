import React, { useEffect, useState } from 'react';
import './darkMode.css';

const DarkMode = () => {
  const [title, setTitle] = useState('');
  let mode;
  if (typeof window !== 'undefined') {
    mode = document.querySelector('html');
  }
  const darkModeOff = () => setTitle('toggle-btn');
  const darkModeOn = () => setTitle('toggle-btn active');
  const toggleLightStyles = () => mode.classList.toggle('light');
  const toggleDarkStyles = () => mode.classList.toggle('dark');

  useEffect(() => {
    if (typeof window === 'undefined') {
      setTitle('toggle-btn');
    } else {
      const darkMode = window.localStorage.getItem('dark-mode');
      if (darkMode === 'true') {
        darkModeOn();
        if (!mode.classList.contains('dark')) {
          toggleDarkStyles();
        }
      } else {
        darkModeOff();
      }
    }
  });

  const toggleMode = () => {
    toggleLightStyles();
    toggleDarkStyles();
  };

  const saveDarkModeOn = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dark-mode', true);
    }
  };

  const saveDarkModeOff = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dark-mode', false);
    }
  };

  const onClickHandler = (e) => {
    if (title === 'toggle-btn') {
      darkModeOn();
      saveDarkModeOn();
    } else {
      darkModeOff();
      saveDarkModeOff();
    }
    toggleMode();
  };

  return (
    <div id='dark'>
      <div className='darkMode mobile hideThis'>
        DARK MODE
        <div className={title} id='toggle-btn' onClick={onClickHandler}>
          <div className='inner-circle' id='inner-circle' />
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
