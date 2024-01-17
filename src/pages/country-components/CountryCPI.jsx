import { useState, useEffect } from 'react'
import data from '../../data/other/unece/Consumer-price-index.json'
import Alert from 'react-bootstrap/Alert'
import Loading from '../../components/Loading'

const CountryCPI = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [years, setYears] = useState([])
  const [values, setValues] = useState([])
  const [noDataMsg, setNoDataMsg] = useState(null)
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
        } else {
          setNoDataMsg('No data for this country.')
        }
      } catch (error) {
        console.log('Error loading data:', error)
        setNoDataMsg('No data for this country.')
      } finally {
        setLoading(false)
        setNoDataMsg(null)
      }
    }

    fetchData()
  }, [data, cca3])

  return (
    <>
      {loading && <Loading />}
      <p className='description'>{description}</p>
      {noDataMsg && <Alert variant='warning'>{noDataMsg}</Alert>}
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
                      val < 0
                        ? 'cpi--green'
                        : val < 5
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

export default CountryCPI
