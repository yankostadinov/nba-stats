import { Link, useRouteMatch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

function Navigation() {
  const players = useRouteMatch('/players');
  const home = useRouteMatch('/').isExact;
  const teams = useRouteMatch('/teams');
  const value = [players, home, teams].findIndex(Boolean);

  return (
    <AppBar position='sticky' >
      <Tabs value={value} centered>
        <Tab label='Players' component={Link} to='/players' />
        <Tab label='Home' component={Link} to='/' />
        <Tab label='Teams' component={Link} to='/teams' />
      </Tabs>
    </AppBar>
  );
}

export default Navigation;
