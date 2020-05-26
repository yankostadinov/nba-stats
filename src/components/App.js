import React from 'react';
import FilteredPlayerList from '../containers/FilteredPlayerList';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>Welcome to NBA stats.</header>
      <FilteredPlayerList />
    </div>
  );
}

export default App;
