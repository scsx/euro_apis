import * as types from '../actions/actionTypes'
import getCountries from '../../api/getCountries'

let initialState = {
  allCountries: []
}

const currentCountries = getCountries()

const allCountriesReducer = (state = initialState, action) => {
  if (currentCountries.length > 0) {
    initialState = {
      allCountries: currentCountries
    }
  }

  switch (action.type) {
    case types.GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload
      }
    default:
      return state
  }
}

export default allCountriesReducer
