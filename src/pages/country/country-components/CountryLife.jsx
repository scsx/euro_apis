import { useState, useEffect } from 'react'
import data from '../../../data/other/unece/Life-expectancy-combined-last-three-years.json'
import Alert from 'react-bootstrap/Alert'
import Loading from '../../../components/Loading'
import { Line } from 'react-chartjs-2'

const CountryLife = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [noDataMsg, setNoDataMsg] = useState('')
  const [menData, setMenData] = useState([])
  const [womenData, setWomenData] = useState([])
  const [dataChart, setDataChart] = useState({})

  // Get and work data
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
              tempMenData.push(value.men)
              tempWomenData.push(value.women)
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

  // Build graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart'
      }
    }
  }

  useEffect(() => {
    const labels = ['2020', '2021', '2022']

    if (
      labels.length > 0 &&
      menData.length > 0 &&
      womenData.length > 0 &&
      menData.length >= labels.length &&
      womenData.length >= labels.length
    ) {
      setDataChart({
        labels,
        datasets: [
          {
            label: 'Men',
            data: labels.map((year, index) => {
              return menData[index] !== '' ? menData[index] : null
            }),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
          },
          {
            label: 'Women',
            data: labels.map((year, index) => {
              return womenData[index] !== '' ? womenData[index] : null
            }),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          }
        ]
      })
    }
  }, [menData, womenData])

  return (
    <>
      {/* {loading && <Loading />}

      {noDataMsg.length > 0 && <Alert variant='warning'>{noDataMsg}</Alert>} */}
      {Object.entries(dataChart).length > 0 &&
        Object.entries(options).length > 0 &&
        menData.length > 0 &&
        womenData.length > 0 && <Line options={options} data={dataChart} />}
    </>
  )
}

export default CountryLife
