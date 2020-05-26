import Axios from 'axios';
import { connect } from 'react-redux';
import Player from '../components/Player';
import { getPlayerStats } from '../redux/actions';

const fetchPlayerStats = async (personId) => {
  const playerDetails = await Axios.get(`http://data.nba.net/10s/prod/v1/2019/players/${personId}_profile.json`);
  return playerDetails.data.league.standard.latest;
};

const mapStateToProps = state => ({ stats: fetchPlayerStats(state.personId) });
const mapDispatchToProps = { getPlayerStats };

export default connect(mapStateToProps, mapDispatchToProps)(Player);
