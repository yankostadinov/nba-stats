import { combineReducers } from 'redux';
import { PLAYERS_RECEIVED, PLAYER_STATS_RECEIVED } from './actions';

const players = (state = [], action) => {
  switch (action.type) {
    case PLAYERS_RECEIVED:
      return action.players;

    default:
      return state;
  }
};

const playerStats = (state = {}, action) => {
  switch (action.type) {
    case PLAYER_STATS_RECEIVED:
      return {
        ...state,
        [action.personId]: action.stats,
      };

    default:
      return state;
  }
};

export default combineReducers({
  players,
  playerStats,
});
