import * as types from '../actions/actionTypes'
import getCountries from '../../api/getCountries'

let initialState = {
  allCountries: []
}

const currentCountries = getCountries()

const allCountriesReducer = (state = initialState, action) => {
  if (currentCountries.length > 0) {
    // Originaly ordered by code GB > United Kingdom; name is preferred
    const reorderedCountries = currentCountries.sort((a, b) =>
      a.name > b.name ? 1 : -1
    )
    initialState = {
      allCountries: reorderedCountries
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
