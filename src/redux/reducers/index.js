import { combineReducers } from 'redux'
import countryReducer from './countryReducer'
import allCountriesReducer from './allCountriesReducer'

const rootReducer = combineReducers({
  country: countryReducer,
  allCountries: allCountriesReducer
})

export default rootReducer
