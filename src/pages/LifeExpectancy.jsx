import { useState, useEffect } from 'react'
import Page from '../components/Page'
import menData from '../data/other/unece/Life-expectancy-men.json'
import womenData from '../data/other/unece/Life-expectancy-women.json'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { getRandomColor } from '../utils/utils'
import './LifeExpectancy.scss'

const LifeExpectancy = () => {
  const [allYears, setAllYears] = useState([])
  const [datasets, setDatasets] = useState([])
  const [dataChart, setDataChart] = useState({})

  const graphOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: (_, legendItem) => {
          handleFilterCountries(legendItem.text)
        }, // "e" is not needed, _ used
        position: 'top',
        align: 'start',
        labels: {
          boxHeight: 15,
          color: 'black'
        }
      }
    }
  }

  const handleFilterCountries = (country) => {
    console.log(country)
  }

  // Work data
  useEffect(() => {
    const processData = () => {
      try {
        setAllYears(menData.Periods)

        let datasetsTemp = menData.DataTable.map((entry) => {
          let countryCode = entry.Country.Alpha3Code
          let countryName = entry.Country.Name
          let countryColor = getRandomColor()

          let countryObj = {
            label: countryName,
            borderColor: countryColor.rgb,
            backgroundColor: countryColor.rgba
          }

          let womenDataTemp = womenData.DataTable.find(
            (womenEntry) => womenEntry.Country.Alpha3Code === countryCode
          )

          if (womenDataTemp) {
            let combinedValuesArrayTemp = allYears.map((_, index) => {
              // "year" is not needed, _ used
              let menValue = entry.Values[index]
              let womenValue = womenDataTemp.Values[index]

              if (menValue !== '' && womenValue !== '') {
                // Average M vs F
                return ((+menValue + +womenValue) / 2).toFixed(2)
              } else {
                return null
              }
            })

            countryObj.data = combinedValuesArrayTemp
          }

          return countryObj
        })

        setDatasets(datasetsTemp)
      } catch (error) {
        console.error('Error processing data:', error)
      }
    }

    processData()
  }, [menData, womenData, allYears])

  // Build graph
  useEffect(() => {
    if (allYears.length > 0 && datasets.length > 0) {
      setDataChart({
        labels: allYears,
        datasets: datasets
      })
    }
  }, [allYears, datasets])

  return (
    <Page classes='lifeexpectancy'>
      <h1 className='mb-5'>Life expectancy combined (M/F)</h1>

      <div className='graphbox'>
        {Object.entries(menData).length > 0 &&
          Object.entries(womenData).length > 0 &&
          Object.entries(dataChart).length > 0 &&
          Object.entries(graphOptions).length > 0 && (
            <Line options={graphOptions} data={dataChart} redraw={true} />
          )}
      </div>
    </Page>
  )
}

export default LifeExpectancy
