import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerStats } from '../redux/actions';
import './Player.css';

function Player({ temporaryDisplayName, personId }) {
  const dispatch = useDispatch();
  const playerStats = useSelector(state => state.playerStats[personId]);
  const handleClick = () => dispatch(getPlayerStats(personId));

  return (
    <div className="player" onClick={handleClick}>
      {temporaryDisplayName}
      {playerStats ? `stats: ${playerStats}` : ''}
    </div>
  );
}

Player.propTypes = {
  temporaryDisplayName: PropTypes.string.isRequired,
  personId: PropTypes.string.isRequired,
};

export default Player;
