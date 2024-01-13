import * as types from '../actions/actionTypes'

const initialState = {
  selectedCountry: 'PT'
}

const countryReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.CHOOSE_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload
      }
    default:
      return state
  }
}

export default countryReducer
