import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import PlayerList from './screens/PlayerList';
import PlayerStats from './screens/PlayerStats';
import store from './redux/store';

import './App.css';

const App = () => <Provider store={store}>
  <div className='App'>
    <Router>
      <header className='App-header'>Welcome to NBA stats.</header>
      <Switch>
        <Route exact path='/' component={PlayerList} />
        <Route path='/player/:personId' component={PlayerStats} />
      </Switch>
    </Router>
  </div>
</Provider>;

export default App;
