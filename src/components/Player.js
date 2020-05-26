import PropTypes from 'prop-types';
import React from 'react';
import './Player.css';

function Player({ temporaryDisplayName, personId, stats, getPlayerStats }) {
  const handleClick = () => {
    getPlayerStats(personId);
  };

  return (
    <div className="player" onClick={handleClick}>
      {temporaryDisplayName}
      stats: {stats}
    </div>
  );
}

Player.propTypes = {
  temporaryDisplayName: PropTypes.string.isRequired,
  personId: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  getPlayerStats: PropTypes.func.isRequired,
};

export default Player;
