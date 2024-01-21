import men from '../data/other/unece/Life-expectancy-men.json'
import women from '../data/other/unece/Life-expectancy-women.json'

export const combine = () => {
  const menData = men.DataTable
  const womenData = women.DataTable

  menData.forEach((country) => {
    country.Periods = country.Periods.slice(15)
    country.Values = country.Values.slice(15)
  })

  womenData.forEach((country) => {
    country.Periods = country.Periods.slice(15)
    country.Values = country.Values.slice(15)
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
