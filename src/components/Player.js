import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Typography from '@material-ui/core/Typography';

import { fetchPlayerStats } from '../redux/actions';
import PlayerStatsTooltip from './PlayerStatsTooltip';

function Player({ temporaryDisplayName, personId }) {
  const container = useRef();
  const dispatch = useDispatch();
  const playerStats = useSelector(state => state.playerStats[personId]);
  const handlePointerEnter = () => {
    dispatch(fetchPlayerStats(personId));
  };

  return (
    <Card elevation={5} ref={container}>
      <CardContent>
        <PlayerStatsTooltip loading={!playerStats || playerStats.isFetching} stats={playerStats && playerStats.stats}>
          <Typography variant='h3' component={Link} color='textPrimary' to={`/players/${personId}`} onPointerEnter={handlePointerEnter}>{temporaryDisplayName}</Typography>
        </PlayerStatsTooltip>
      </CardContent>
    </Card>
  );
}

Player.propTypes = {
  temporaryDisplayName: PropTypes.string.isRequired,
  personId: PropTypes.string.isRequired,
};

export default Player;
