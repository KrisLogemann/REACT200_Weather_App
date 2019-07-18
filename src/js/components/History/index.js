import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    searchText: store.weather.searchText,
    history: store.weather.history
  };
}

export default connect(mapStoreToProps)(History);
