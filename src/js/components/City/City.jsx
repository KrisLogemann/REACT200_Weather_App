import React from 'react';

export default class City extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      searchText,
      lon,
      lat,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      windSpeed
    } = this.props;

    return (
      <div>
        <div className='card'>
          <h5 className='card-header text-white bg-primary mb-3'>
            City Information
          </h5>
          <div className='card-body'>
            <h3 className='card-title text-center'>{searchText}</h3>
            <p className='card-text text-center'>
              Latitude and Longitude: {lat}, {lon}
            </p>
            <div className='row'>
              <div className='col'>
                <h6 className='text-center'>Temperature (F)</h6>
                <p className='text-center'>{temp}°F</p>
              </div>
              <div className='col'>
                <h6 className='text-center'>Pressure</h6>
                <p className='text-center'>{pressure}mb</p>
              </div>
              <div className='col'>
                <h6 className='text-center'>Humidity</h6>
                <p className='text-center'>{humidity}%</p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <h6 className='text-center'>Lowest Temp (F)</h6>
                <p className='text-center'>{temp_min}°F</p>
              </div>
              <div className='col'>
                <h6 className='text-center'>Highest Temp (F)</h6>
                <p className='text-center'>{temp_max}°F</p>
              </div>
              <div className='col'>
                <h6 className='text-center'>Wind Speed</h6>
                <p className='text-center'>{windSpeed}Mph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
