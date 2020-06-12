import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

import Home from './screens/Home';
import Navigation from './components/Navigation';
import PlayerList from './screens/PlayerList';
import PlayerStats from './screens/PlayerStats';
import store from './redux/store';
import TeamList from './screens/TeamList';
import TeamStats from './screens/TeamStats';

import './App.css';

const App = () => <Provider store={store}>
  <div className='App'>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/players' component={PlayerList} />
        <Route exact path='/teams' component={TeamList} />
        <Route path='/players/:personId' component={PlayerStats} />
        <Route path='/teams/:teamId' component={TeamStats} />
      </Switch>
    </Router>
  </div>
</Provider>;

export default App;
