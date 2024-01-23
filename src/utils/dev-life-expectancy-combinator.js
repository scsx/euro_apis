import men from '../data/other/unece/Life-expectancy-men.json'
import women from '../data/other/unece/Life-expectancy-women.json'

export const combineAll = () => {
  const menData = men.DataTable
  const womenData = women.DataTable

    console.log(menData)
  menData.forEach((country) => {
    console.log(country.Periods)
    country.Periods = country.Periods.slice(0,-1)
    country.Values = country.Values.slice(0,-1)
  })

  womenData.forEach((country) => {
    country.Periods = country.Periods.slice(0,-1)
    country.Values = country.Values.slice(0,-1)
  })

  const combinedData = []

  menData.forEach((country, topIndex) => {
    let code = country.Country.Alpha3Code
    let countryObj = {
      country: code
    }

    country.Periods.forEach((year, index) => {
      countryObj[year] = {
        men: country.Values[index],
        women: womenData[topIndex].Values[index]
      }
    })

    combinedData.push(countryObj)
  })

  console.log(combinedData)
}
