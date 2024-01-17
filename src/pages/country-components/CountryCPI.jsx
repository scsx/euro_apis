import { useState, useEffect } from 'react'
import data from '../../data/other/unece/Consumer-price-index.json'

const CountryCPI = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [years, setYears] = useState([])
  const [values, setValues] = useState([])

  /*   useEffect(() => {
    console.log(data)

    if (data) {
      let filteredArray = data.DataTable.filter((entry) => {
        return entry.Country.Alpha3Code == cca3
      })

      setYears(filteredArray[0].Periods)
      setValues(filteredArray[0].Values)
    }
  }, [data, cca3]) */

  useEffect(() => {
    console.log(cca3)
    const fetchData = async () => {
      try {
        let filteredArray = data.DataTable.filter((entry) => {
          return entry.Country.Alpha3Code == cca3
        })
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setYears(filteredArray[0].Periods)
        setValues(filteredArray[0].Values)
      } catch (error) {
        console.log('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [data, cca3])

  return (
    <>
      {loading && <div>Loading...</div>}

      <table className='table table-bordered text-center'>
        {years.length > 0 && (
          <thead>
            <tr>
              {years.map((year) => {
                return <th key={year}>{year.slice(2)}</th>
              })}
            </tr>
          </thead>
        )}
        {values.length > 0 && (
          <tbody>
            <tr>
              {values.map((val, i) => {
                return <td key={val + i}>{val}</td>
              })}
            </tr>
          </tbody>
        )}
      </table>
    </>
  )
}

export default CountryCPI
