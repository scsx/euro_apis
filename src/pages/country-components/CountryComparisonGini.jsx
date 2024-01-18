import { useState, useEffect } from 'react'

const CountryComparisonGini = ({ countryCode2, cd1, cd2 }) => {
  const [ginis, setGinis] = useState({})

  // Gini for both
  useEffect(() => {
    if (Object.keys(cd1).length > 0 && Object.keys(cd2).length > 0) {
      let yearsAvailable = ['2020', '2019', '2018', '2017', '2016']
      for (let index = 0; index < yearsAvailable.length; index++) {
        if (cd1.gini) {
          if (cd1.gini[yearsAvailable[index]]) {
            setGinis((prevState) => ({
              ...prevState,
              cd1: {
                year: `(${yearsAvailable[index]})`,
                value: cd1.gini[yearsAvailable[index]]
              }
            }))
          }
        } else {
          setGinis((prevState) => ({
            ...prevState,
            cd1: {
              year: '',
              value: 'n/a'
            }
          }))
        }
        if (cd2.gini) {
          if (cd2.gini[yearsAvailable[index]]) {
            setGinis((prevState) => ({
              ...prevState,
              cd2: {
                year: `(${yearsAvailable[index]})`,
                value: cd2.gini[yearsAvailable[index]]
              }
            }))
          }
        } else {
          setGinis((prevState) => ({
            ...prevState,
            cd2: {
              year: '',
              value: 'n/a'
            }
          }))
        }
      }
    }
  }, [countryCode2, cd1, cd2])

  return (
    ginis.cd1 &&
    ginis.cd2 && (
      <tr>
        <td className='name'>Gini</td>
        <td className={ginis.cd1.value < ginis.cd2.value ? 'winner' : ''}>
          {ginis.cd1.value} <small>{ginis.cd1.year}</small>
        </td>
        <td className={ginis.cd2.value < ginis.cd1.value ? 'winner' : ''}>
          {ginis.cd2.value} <small>{ginis.cd2.year}</small>
        </td>
      </tr>
    )
  )
}

export default CountryComparisonGini
