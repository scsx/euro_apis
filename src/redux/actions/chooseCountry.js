import * as types from './actionTypes'

export const chooseCountry = (selectedCountry) => ({
  type: types.CHOOSE_COUNTRY,
  payload: selectedCountry
})
