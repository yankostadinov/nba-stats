export const PLAYERS_REQUESTED = 'PLAYERS_REQUESTED';
export const fetchPlayers = () => ({ type: PLAYERS_REQUESTED });

export const PLAYERS_RECEIVED = 'PLAYERS_RECEIVED';
export const getPlayers = players => ({ type: PLAYERS_RECEIVED, players });

export const PLAYER_STATS_REQUESTED = 'PLAYER_STATS_REQUESTED';
export const fetchPlayerStats = personId => ({ type: PLAYER_STATS_REQUESTED, personId });

export const PLAYER_STATS_RECEIVED = 'PLAYER_STATS_RECEIVED';
export const getPlayerStats = (personId, stats) => ({ type: PLAYER_STATS_RECEIVED, personId, stats });
