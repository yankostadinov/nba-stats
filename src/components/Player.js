import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayerStats } from '../redux/actions';
import './Player.css';

function Player({ temporaryDisplayName, personId }) {
  const dispatch = useDispatch();
  const playerStats = useSelector(state => state.playerStats[personId]);
  const handleClick = () => dispatch(fetchPlayerStats(personId));

  return (
    <div className='player' onClick={handleClick}>
      <div className='player-name'>{temporaryDisplayName}</div>
      {playerStats && <div className='player-stats'>{playerStats.ppg}/{playerStats.rpg}/{playerStats.apg}/{playerStats.bpg}/{playerStats.spg}</div>}
    </div>
  );
}

Player.propTypes = {
  temporaryDisplayName: PropTypes.string.isRequired,
  personId: PropTypes.string.isRequired,
};

export default Player;
