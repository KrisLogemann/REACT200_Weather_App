import React from 'react';
import { searchCity, getWeather } from './searchActions';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleCity = this.handleCity.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCity(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(getWeather(value));
  }

  handleSearch(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchCity(value));
  }

  handleSubmit() {
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }
  render() {
    const { value } = this.props;
    return (
      <div style={ { marginTop: '20px', marginBottom: '20px' } }>
        <div className='btn-group' role='group'>
          <button
            type='button'
            className='btn btn-primary'
            value='San Diego'
            name='San Diego'
            onClick={ this.handleCity }
          >
            San Diego
          </button>
          <button
            type='button'
            className='btn btn-primary'
            value='Escondido'
            name='Escondido'
            onClick={ this.handleCity }
          >
            Escondido
          </button>
          <button
            type='button'
            className='btn btn-primary'
            value='Portland'
            name='Portland'
            onClick={ this.handleCity }
          >
            Portland
          </button>
          <button
            type='button'
            className='btn btn-primary'
            value='Las Vegas'
            name='Las Vegas'
            onClick={ this.handleCity }
          >
            Las Vegas
          </button>
          <button
            type='button'
            className='btn btn-primary'
            value='Poway'
            name='Poway'
            onClick={ this.handleCity }
          >
            Poway
          </button>
        </div>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Your City'
            value={ value }
            onChange={ this.handleSearch }
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={ this.handleSubmit }
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
