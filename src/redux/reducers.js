import { combineReducers } from 'redux';
import { PLAYERS_RECEIVED, PLAYER_STATS_RECEIVED, PLAYER_STATS_REQUESTED } from './actions';

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
    case PLAYER_STATS_REQUESTED:
      return {
        ...state,
        [action.personId]: {
          stats: {},
          isFetching: true,
        }
      };

    case PLAYER_STATS_RECEIVED:
      return {
        ...state,
        [action.personId]: {
          stats: action.stats,
          isFetching: false,
        }
      };

    default:
      return state;
  }
};

export default combineReducers({
  players,
  playerStats,
});
