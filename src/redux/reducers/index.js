import { combineReducers } from 'redux'
import countryReducer from './countryReducer'
import allCountriesReducer from './allCountriesReducer'
import videosReducer from './videosReducer'

const rootReducer = combineReducers({
  country: countryReducer,
  allCountries: allCountriesReducer,
  savedVideos: videosReducer
})

export default rootReducer
