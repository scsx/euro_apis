// Similar files use getLastCommonEntry()

import data from '../../../data/other/unece/Proportion-one-person-households.json'
import { toLoc, getLastCommonEntry } from '../../../utils/utils'

const CountryComparisonOnePersonHouseholds = ({ cca3Country1, cca3Country2 }) => {
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
    const percentage1 = valuesArrayCountry1[commonIndex]
    const percentage2 = valuesArrayCountry2[commonIndex]

    return (
      <tr>
        <td className='name'>
          % one person households ({commonYear})
        </td>
        <td className={+percentage1 < +percentage2 ? 'winner' : ''}>
          {percentage1}
        </td>
        <td className={+percentage2 < +percentage1 ? 'winner' : ''}>
          {percentage2}
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

export default CountryComparisonOnePersonHouseholds
