// Similar files use getLastCommonEntry()

import data from '../../../data/other/unece/Total-fertility-rate.json'
import { getLastCommonEntry } from '../../../utils/utils'

const CountryComparisonFertility = ({ cca3Country1, cca3Country2 }) => {
  const dataCountry1 = data.DataTable.filter((country) => {
    return country.Country.Alpha3Code === cca3Country1
  })

  const dataCountry2 = data.DataTable.filter((country) => {
    return country.Country.Alpha3Code === cca3Country2
  })

  if (dataCountry1.length > 0 && dataCountry2.length > 0) {
    const valuesArrayCountry1 = dataCountry1[0].Values
    const valuesArrayCountry2 = dataCountry2[0].Values

    const commonIndex = getLastCommonEntry(
      valuesArrayCountry1,
      valuesArrayCountry2
    )

    const commonYear = dataCountry1[0].Periods[commonIndex]
    const tfr1 = valuesArrayCountry1[commonIndex]
    const tfr2 = valuesArrayCountry2[commonIndex]

    return (
      <tr>
        <td className='name'>Fertility rate ({commonYear})</td>
        <td className={tfr1 > tfr2 ? 'winner' : ''}>{tfr1}</td>
        <td className={tfr2 > tfr1 ? 'winner' : ''}>{tfr2}</td>
      </tr>
    )
  }

  return (
    <tr>
      <td className='name'>Fertility rate</td>
      <td colSpan='2'>No data available</td>
    </tr>
  )
}

export default CountryComparisonFertility
