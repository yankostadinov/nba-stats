import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../redux/actions';
import Player from './Player';
import './PlayerList.css';

function PlayerList() {
  const dispatch = useDispatch();
  const players = useSelector(state => state.players);

  const search = useRef();
  const [searchFilter, setSearchFilter] = useState('');
  const handleChange = () => setSearchFilter(search.current.value);

  const handleButtonClick = () => dispatch(fetchPlayers());
  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <div id='players'>
      <input type='text' ref={search} onChange={handleChange} placeholder='Search players' />
      <input type='button' onClick={handleButtonClick} value='Refresh players' />
      <div id='player-list'>
        {players
          .filter(player => player.temporaryDisplayName.toLowerCase().includes(searchFilter))
          .map(player => <Player {...player} key={player.personId} />)}
      </div>
    </div>
  );
}

export default PlayerList;
