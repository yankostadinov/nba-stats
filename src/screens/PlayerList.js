import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import React, { useEffect, useRef, useState } from 'react';

import { fetchPlayers } from '../redux/actions';
import Player from '../components/Player';

function PlayerList() {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players);

  const search = useRef();
  const [searchFilter, setSearchFilter] = useState('');
  const handleChange = () => setSearchFilter(search.current.value);

  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return <Container>
    <input type='text' ref={search} onChange={handleChange} placeholder='Search players' />
    <GridList cols={3} cellHeight='auto'>
      {players
        .filter(player => player.temporaryDisplayName.toLowerCase().includes(searchFilter))
        .map(player =>
          <GridListTile key={player.personId}>
            <Player {...player} />
          </GridListTile>
        )
      }
    </GridList>
  </Container>;
}

export default PlayerList;
