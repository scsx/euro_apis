import { combineReducers } from 'redux'
import countryReducer from './countryReducer'
import allCountriesReducer from './allCountriesReducer'
import videosReducer from './videosReducer'

const rootReducer = combineReducers({
  country: countryReducer,
  allCountries: allCountriesReducer,
  videos: videosReducer
})

export default rootReducer
