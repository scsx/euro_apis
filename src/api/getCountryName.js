import countries from '../data/countriesDB.json'

const getCountryName = (code) => {
  let filtered = countries.filter((country) => country.code == code)
  return filtered[0].name
}

export default getCountryName
