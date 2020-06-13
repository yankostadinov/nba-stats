import { Typography, Tooltip, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function PlayerStatsTooltip({ stats: { ppg, rpg, apg, bpg, spg } = {}, children }) {
  return (
    <Tooltip title={
      <Grid container>
        <Grid container justify='center'>
          <Grid item xs={2}><Typography align='center'>PPG</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>RPG</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>APG</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>BPG</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>SPG</Typography></Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={2}><Typography align='center'>{parseFloat(ppg).toFixed(1)}</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>{parseFloat(rpg).toFixed(1)}</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>{parseFloat(apg).toFixed(1)}</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>{parseFloat(bpg).toFixed(1)}</Typography></Grid>
          <Grid item xs={2}><Typography align='center'>{parseFloat(spg).toFixed(1)}</Typography></Grid>
        </Grid>
      </Grid>
    }>
      {children}
    </Tooltip>
  );
}

PlayerStatsTooltip.propTypes = {
  stats: PropTypes.shape({
    ppg: PropTypes.string,
    rpg: PropTypes.string,
    apg: PropTypes.string,
    bpg: PropTypes.string,
    spg: PropTypes.string,
  }),
  children: PropTypes.any,
};

export default PlayerStatsTooltip;
