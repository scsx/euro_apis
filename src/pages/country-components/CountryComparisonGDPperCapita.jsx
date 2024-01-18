import data from '../../data/other/unece/GDP-per-capita.json'
import { toLoc, getLastCommonEntry } from '../../utils/utils'
import { IoWarningOutline } from 'react-icons/io5'

const CountryComparisonGDPperCapita = ({ cca3Country1, cca3Country2 }) => {
  const dataCountry1 = data.DataTable.filter((country) => {
    return country.Country.Alpha3Code === cca3Country1
  })

  const dataCountry2 = data.DataTable.filter((country) => {
    return country.Country.Alpha3Code === cca3Country2
  })

  if (dataCountry1.length > 0 && dataCountry2.length > 0) {
    const badDataCountry1 = dataCountry1[0].Country.inconsistentData
      ? true
      : false
    const badDataCountry2 = dataCountry2[0].Country.inconsistentData
      ? true
      : false

    const valuesArrayCountry1 = dataCountry1[0].Values
    const valuesArrayCountry2 = dataCountry2[0].Values

    const commonIndex = getLastCommonEntry(
      valuesArrayCountry1,
      valuesArrayCountry2
    )

    const commonYear = dataCountry1[0].Periods[commonIndex]
    const gdp1 = valuesArrayCountry1[commonIndex]
    const gdp2 = valuesArrayCountry2[commonIndex]

    return (
      <tr>
        <td className='name'>
          GDP per capita (USD, {commonYear})
        </td>
        <td className={+gdp1 > +gdp2 ? 'winner' : ''}>
          {toLoc(gdp1)}
          {badDataCountry1 && <IoWarningOutline />}
        </td>
        <td className={+gdp2 > +gdp1 ? 'winner' : ''}>
          {toLoc(gdp2)}
          {badDataCountry2 && <IoWarningOutline />}
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td className='name'>GDP per capita</td>
      <td colSpan='2'>No data available</td>
    </tr>
  )
}

export default CountryComparisonGDPperCapita
