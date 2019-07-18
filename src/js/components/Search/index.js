import { connect } from 'react-redux';
import Search from './Search';

const mapStoreToProps = store => ({
  city: store.weather.city
});

export default connect(mapStoreToProps)(Search);
