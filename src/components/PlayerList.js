import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applySearchFilter, setPlayers } from '../redux/actions';
import Player from './Player';
import './PlayerList.css';

function PlayerList() {
  const search = useRef();
  const dispatch = useDispatch();
  const players = useSelector(state => state.players);
  const searchFilter = useSelector(state => state.searchFilter);
  const handleChange = () => dispatch(applySearchFilter(search.current.value));

  const handleButtonClick = () => {
    const cachedPlayers = localStorage.getItem('cachedPlayers');
    dispatch(setPlayers(JSON.parse(cachedPlayers)));
  };

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
