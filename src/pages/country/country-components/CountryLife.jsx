import { useState, useEffect } from 'react'
import data from '../../../data/other/unece/Life-expectancy-combined-last-three-years.json'
import Alert from 'react-bootstrap/Alert'
import Loading from '../../../components/Loading'

const CountryLife = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [noDataMsg, setNoDataMsg] = useState('')
  const [menData, setMenData] = useState([])
  const [womenData, setWomenData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredArray = data.all.filter((entry) => entry.country === cca3)

        if (filteredArray.length > 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000))

          let tempMenData = []
          let tempWomenData = []

          for (const [key, value] of Object.entries(filteredArray[0])) {
            if (key !== 'country') {
              let menYearObj = {
                year: key,
                lifeExpectancy: value.men
              }
              let womenYearObj = {
                year: key,
                lifeExpectancy: value.women
              }
              tempMenData.push(menYearObj)
              tempWomenData.push(womenYearObj)
            }
          }

          setMenData(tempMenData)
          setWomenData(tempWomenData)
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
      {/* {loading && <Loading />}

      {noDataMsg.length > 0 && <Alert variant='warning'>{noDataMsg}</Alert>} */}

      {JSON.stringify(menData)}
      {JSON.stringify(womenData)}
    </>
  )
}

export default CountryLife
