import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <div id='players'>
      <input type='text' ref={search} onChange={handleChange} placeholder='Search players' />
      <div id='player-list'>
        {players
          .filter(player => player.temporaryDisplayName.toLowerCase().includes(searchFilter))
          .map(player => <Player {...player} key={player.personId} />)}
      </div>
    </div>
  );
}

export default PlayerList;
