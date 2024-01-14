import * as types from './actionTypes'

export const getCountries = (allCountries) => ({
  type: types.GET_COUNTRIES,
  payload: allCountries
})