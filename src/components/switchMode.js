import React from 'react';
import useDarkMode from '../dark_mode/useDarkMode';

const SwitchMode = () => {
  const [themeState, setThemeState] = useDarkMode();
  const className = 'dark-mode';
  const body = window.document.body;

  const toggle = (dark) => {
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({...themeState, dark});
  }

  if(themeState.dark) {
    body.classList.add(className);
  } else {
    body.classList.remove(className);
  }

  return (
    <div className="toggle-group">
      <button class="toggle-btn" type='button' onClick={() => toggle(false)}>
        OFF
      </button>
      <span className="toggle-control">
        <input 
          className="toggle-checkbox"
          id="checkbox_id"
          type="checkbox"
          checked={themeState.dark}
          onChange={() => toggle(!themeState.dark)}
        />
        <label for="checkbox_id" className="slider"/>
      </span>
      <button class="toggle-btn" type='button' onClick={() => toggle(true)}>
        ON
      </button>
    </div>
  )
  
}

export default SwitchMode;