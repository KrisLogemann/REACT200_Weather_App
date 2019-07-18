const defaultState = {
  searchText: '',
  lat: null,
  lon: null,
  temp: '',
  pressure: '',
  humidity: '',
  temp_min: '',
  temp_max: '',
  windSpeed: '',
  name: '',
  id: '',
  history: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_TEXT': {
      return {
        ...state,
        searchText: payload.searchText
      };
    }
  }

  switch (type) {
    case 'GET_WEATHER_FULFILLED':
      {
        return {
          ...state,
          cityData: payload.data,
          searchText: payload.data.name,
          lat: payload.data.coord.lat,
          lon: payload.data.coord.lon,
          temp: payload.data.main.temp,
          pressure: payload.data.main.pressure,
          humidity: payload.data.main.humidity,
          temp_min: payload.data.main.temp_min,
          temp_max: payload.data.main.temp_max,
          windSpeed: payload.data.wind.speed,
          history: [
            ...state.history,
            {
              searchText: payload.data.name,
              date: new Date().toLocaleString()
            }
          ]
        };
      }

    default: {
      return state;
    }
  }
}
