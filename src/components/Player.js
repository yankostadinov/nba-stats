import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayerStats } from '../redux/actions';
import './Player.css';
import PlayerStatsSummary from './PlayerStatsSummary';
import { Link } from 'react-router-dom';

function Player({ temporaryDisplayName, personId }) {
  const container = useRef();
  const dispatch = useDispatch();
  const playerStats = useSelector(state => state.playerStats[personId]);
  const handlePointerEnter = () => {
    setTimeout(() => {
      const isHovered = container.current && container.current.matches(':hover');
      if (isHovered) dispatch(fetchPlayerStats(personId));
    }, 400);
  };

  return (
    <Link to={`/players/${personId}`} className='player' ref={container} onPointerEnter={handlePointerEnter}>
      <div className='player-name'>{temporaryDisplayName}</div>
      {playerStats && <span className='tooltip'>
        {playerStats.isFetching
          ? 'Loading...'
          : <PlayerStatsSummary {...playerStats.stats} />
        }
      </span>
      }
    </Link>
  );
}

Player.propTypes = {
  temporaryDisplayName: PropTypes.string.isRequired,
  personId: PropTypes.string.isRequired,
};

export default Player;
