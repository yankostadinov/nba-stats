import { combineReducers } from 'redux';
import { APPLY_FILTER, GET_PLAYER_STATS, SET_PLAYERS } from './actions';

const searchFilter = (state = '', action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return action.searchFilter;

    default:
      return state;
  }
};

const players = (state = [], action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return action.players;

    default:
      return state;
  }
};

const playerStats = (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYER_STATS:
      return {
        ...state,
        [action.personId]: 'placeholder',
      };

    default:
      return state;
  }
};

export default combineReducers({
  players,
  playerStats,
  searchFilter,
});
