import { useState, useEffect } from 'react'
import Page from '../components/Page'
import menData from '../data/other/unece/Life-expectancy-men.json'
import womenData from '../data/other/unece/Life-expectancy-women.json'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const LifeExpectancy = () => {
  const [allYears, setAllYears] = useState([])
  const [datasetsArray, setDatasetsArray] = useState([])
  const [dataChart, setDataChart] = useState({})

  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxHeight: 10,
          color: 'black'
        }
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart'
      }
    }
  }

  // Work data
  useEffect(() => {
    // Years
    setAllYears(menData.Periods)

    // Values
    let datasetsTemp = []
    menData.DataTable.map((entry, index) => {
      let countryCode = entry.Country.Alpha3Code

      let countryObj = {
        label: countryCode,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }

      let womenDataTemp = womenData.DataTable.filter(
        (entry) => entry.Country.Alpha3Code === countryCode
      )

      let combinedValuesArrayTemp = []
      entry.Values.map((year, index) => {
        if (year !== '' && womenDataTemp[0].Values[index] !== '') {
          let averageLifeExpectancy = (
            (+year + +womenDataTemp[0].Values[index]) /
            2
          ).toFixed(2)
          combinedValuesArrayTemp.push(averageLifeExpectancy)
        } else {
          combinedValuesArrayTemp.push('')
        }
      })

      // countryObj.data = combinedValuesArrayTemp
      if (allYears.length > 0) {
        countryObj.data = allYears.map((year, index) => {
          console.log(year, combinedValuesArrayTemp[index])
          return combinedValuesArrayTemp[index] !== ''
            ? combinedValuesArrayTemp[index]
            : null
        })
      }
      datasetsTemp.push(countryObj)
    })

    setDatasetsArray(datasetsTemp)
  }, [])

  // Build graph
  useEffect(() => {
    if (allYears.length > 0 && datasetsArray.length > 0) {
      setDataChart({
        allYears,
        datasets: datasetsArray
      })
    }
  }, [allYears, datasetsArray])

  return (
    <Page classes='lifeexpectancy' fullWidth={false}>
      <h1>LE</h1>
      <div className='graphbox'>
        {Object.entries(dataChart).length > 0 &&
          Object.entries(graphOptions).length > 0 && (
            <Line options={graphOptions} data={dataChart} />
          )}
      </div>
    </Page>
  )
}

export default LifeExpectancy
