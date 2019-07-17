import React from 'react';
import SearchBar from './containers/searchBar';
import SearchList from './containers/searchList';
import SwitchMode from './components/switchMode';

const App = () => {
  return (
    <div>
      <SwitchMode />
      <img alt="wiki_logo" className='logo' src={require("./svg/wiki-logo.svg")} />
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default App;