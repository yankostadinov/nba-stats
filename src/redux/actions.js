export const APPLY_FILTER = 'APPLY_FILTER';
export const applySearchFilter = searchFilter => ({ type: APPLY_FILTER, searchFilter });

export const SET_PLAYERS = 'SET_PLAYERS';
export const setPlayers = players => ({ type: SET_PLAYERS, players });

export const GET_PLAYER_STATS = 'GET_PLAYER_STATS';
export const getPlayerStats = personId => ({ type: GET_PLAYER_STATS, personId });
