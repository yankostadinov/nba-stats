import { connect } from 'react-redux';
import PlayerList from '../components/PlayerList';
import { applySearchFilter, setPlayers } from '../redux/actions';

const getFilteredPlayers = (players, searchFilter) => {
  return players.filter(player => player.temporaryDisplayName.toLowerCase().includes(searchFilter));
};

const mapStateToProps = state => ({ players: getFilteredPlayers(state.players, state.searchFilter) });
const mapDispatchToProps = { setPlayers, applySearchFilter };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
