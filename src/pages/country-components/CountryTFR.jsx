import { useState, useEffect } from 'react'
import data from '../../data/other/unece/Total-fertility-rate.json'
import Alert from 'react-bootstrap/Alert'
import Loading from '../../components/Loading'

const CountryTFR = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [years, setYears] = useState([])
  const [values, setValues] = useState([])
  const [noDataMsg, setNoDataMsg] = useState('')
  const description = data.desc

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredArray = data.DataTable.filter(
          (entry) => entry.Country.Alpha3Code === cca3
        )

        if (filteredArray.length > 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          setYears(filteredArray[0]?.Periods || [])
          setValues(filteredArray[0]?.Values || [])
          setNoDataMsg('')
        } else {
          setNoDataMsg('No data for this country.')
        }
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
      {loading && <Loading />}
      <p className='description'>{description}</p>

      {noDataMsg.length > 0 && <Alert variant='warning'>{noDataMsg}</Alert>}

      <table className='table table-bordered text-center table-cpi'>
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
                return (
                  <td
                    key={val + i}
                    className={
                      val > 2.1
                        ? 'cpi--green'
                        : val > 1.5
                        ? 'cpi--red'
                        : 'cpi--redder'
                    }>
                    {val}
                  </td>
                )
              })}
            </tr>
          </tbody>
        )}
      </table>
    </>
  )
}

export default CountryTFR
