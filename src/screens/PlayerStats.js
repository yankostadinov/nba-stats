import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { fetchPlayerStats } from '../redux/actions';

const PlayerStats = () => {
  const dispatch = useDispatch();
  const { personId } = useParams();
  const { temporaryDisplayName } = useSelector(state => state.players.find(player => player.personId === personId) || {});
  const playerStats = useSelector(state => state.playerStats[personId]);

  useEffect(() => {
    if (playerStats == null) dispatch(fetchPlayerStats(personId));
  }, []);

  return (
    <div className='player'>
      <div className='player-name'>{temporaryDisplayName}</div>
      {playerStats
        ? <div className='player-stats'>{playerStats.stats.ppg}/{playerStats.stats.rpg}/{playerStats.stats.apg}/{playerStats.stats.bpg}/{playerStats.stats.spg}</div>
        : <div>Loading...</div>
      }
    </div>
  );
};

export default PlayerStats;
