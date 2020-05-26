import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import ClickablePlayer from '../containers/ClickablePlayer';
import './PlayerList.css';

function PlayerList({ players, setPlayers, applySearchFilter }) {
  const search = useRef();
  const handleChange = () => applySearchFilter(search.current.value);

  const handleButtonClick = () => {
    const cachedPlayers = localStorage.getItem('cachedPlayers');
    setPlayers(JSON.parse(cachedPlayers));
  };

  return (
    <div id='players'>
      <input type='text' ref={search} onChange={handleChange} placeholder='Search players' />
      <input type='button' onClick={handleButtonClick} value='Refresh players' />
      <div id='player-list'>
        {players.map(player => <ClickablePlayer {...player} key={player.personId} />)}
      </div>
    </div>
  );
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  applySearchFilter: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
};

export default PlayerList;
