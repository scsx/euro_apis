import countries from '../data/countriesDB.json'

const getCountryName = (code) => {
  let filtered = countries.filter((country) => country.code == code)

  console.log(filtered)
  return filtered[0].name
}

export default getCountryName
