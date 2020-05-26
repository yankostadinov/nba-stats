import Axios from 'axios';
import { all, put, takeEvery } from 'redux-saga/effects';
import { getPlayers, getPlayerStats, PLAYERS_REQUESTED, PLAYER_STATS_REQUESTED } from './actions';

function* fetchPlayers() {
  const cachedPlayersJSON = localStorage.getItem('cachedPlayers');
  let players;

  if (cachedPlayersJSON) players = JSON.parse(cachedPlayersJSON);
  else {
    const playersResponse = yield Axios.get('http://data.nba.net/10s/prod/v1/2019/players.json');
    players = playersResponse.data.league.standard.filter(player => player.temporaryDisplayName);

    localStorage.setItem('cachedPlayers', JSON.stringify(players));
  }

  yield put(getPlayers(players));
}

function* watchFetchPlayers() {
  yield takeEvery(PLAYERS_REQUESTED, fetchPlayers);
}

function* fetchPlayerStats({ personId }) {
  const cachedPlayerStatsJSON = localStorage.getItem('cachedPlayerStats');
  const cachedPlayerStats = cachedPlayerStatsJSON ? JSON.parse(cachedPlayerStatsJSON) : {};
  let playerStats;

  if (cachedPlayerStats && cachedPlayerStats[personId]) playerStats = cachedPlayerStats[personId];
  else {
    const playerDetails = yield Axios.get(`http://data.nba.net/10s/prod/v1/2019/players/${personId}_profile.json`);
    playerStats = playerDetails.data.league.standard.stats.latest;

    localStorage.setItem('cachedPlayerStats', JSON.stringify({ ...cachedPlayerStats, [personId]: playerStats }));
  }

  yield put(getPlayerStats(personId, playerStats));
}

function* watchFetchPlayerStats() {
  yield takeEvery(PLAYER_STATS_REQUESTED, fetchPlayerStats);
}

export default function* rootSaga() {
  yield all([
    watchFetchPlayers(),
    watchFetchPlayerStats(),
  ]);
}
