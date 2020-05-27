import PropTypes from 'prop-types';
import React from 'react';
import './PlayerStatsSummary.css';

function PlayerStatsSummary({ ppg, rpg, apg, bpg, spg }) {
  return (
    <div className='player-stats-summary'>
      <div>PTS<br/>{ppg}</div>
      <div>REB<br/>{rpg}</div>
      <div>AST<br/>{apg}</div>
      <div>BLK<br/>{bpg}</div>
      <div>STL<br/>{spg}</div>
    </div>
  );
}

PlayerStatsSummary.propTypes = {
  ppg: PropTypes.string.isRequired,
  rpg: PropTypes.string.isRequired,
  apg: PropTypes.string.isRequired,
  bpg: PropTypes.string.isRequired,
  spg: PropTypes.string.isRequired,
};

export default PlayerStatsSummary;
