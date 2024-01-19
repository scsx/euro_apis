import GDPdata from '../../../data/other/unece/GDP-per-capita.json'
import * as d3 from 'd3'
import { useEffect, useState, useRef } from 'react'
import { calculateAverage } from '../../../utils/utils'

const CountryGDPCapita = ({ cca3 }) => {
  const [GDPArray, setGDPArray] = useState([])
  const [averageGDPValue, setAverageGDPValue] = useState(30000)
  const graphcontainer = useRef()
  const refSVG = useRef()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filteredArray = GDPdata.DataTable.filter(
          (entry) => entry.Country.Alpha3Code === cca3
        )

        if (filteredArray.length > 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          const years = filteredArray[0]?.Periods || []
          const values = filteredArray[0]?.Values || []

          if (values.length > 0) {
            //setAverageGDPValue(calculateAverage(values))
            setAverageGDPValue(Math.floor(calculateAverage(values)))
          }

          const tempArray = []

          if (years.length > 0) {
            years.forEach((year, index) => {
              tempArray.push({
                year: year,
                value: values[index]
              })
            })
          }

          const trimmedArray = tempArray.slice(7)
          setGDPArray(trimmedArray)
        } else {
          console.log('No data for this country.')
        }
      } catch (error) {
        console.log('Error loading data:', error)
      }
    }

    fetchData()
  }, [cca3, averageGDPValue])

  const draw = () => {
    if (GDPArray.length > 0) {
      // Set the dimensions and geometrys of the graph
      const geometry = { top: 30, right: 30, bottom: 100, left: 60 },
        width = 1296 - geometry.left - geometry.right,
        height = 500 - geometry.top - geometry.bottom

      const min = Math.max(0, averageGDPValue - 20000)
      const max = Math.min(140000, averageGDPValue + 20000)
      const getColour = (d) => {
        d = +d
        let color

        if (d > 40000) {
          color = '#151b54'
        } else if (d > 25000) {
          color = '#55a855'
        } else if (d > 15000) {
          color = '#fab942'
        } else {
          color = '#ef6060'
        }
        return color
      }

      const getCSSClasses = (d) => {
        // Empty bar
        if (d == 0 || d === '') {
          return 'uniqueBarName empty-bar'
        } else {
          return 'uniqueBarName'
        }
      }

      // Remove existing SVG element or clear its content
      d3.select(refSVG.current).selectAll('svg').remove()

      let svg = null
      // Append the svg object to the body of the page
      svg = d3
        .select(refSVG.current)
        .append('svg')
        .attr('width', width + geometry.left + geometry.right)
        .attr('height', height + geometry.top + geometry.bottom)
        .append('g')
        .attr('transform', `translate(${geometry.left},${geometry.top})`)

      // X axis
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(GDPArray.map((d) => d.year))
        .padding(0.2)

      // Y axis
      const y = d3.scaleLinear().domain([min, max]).range([height, 0])
      svg.append('g').call(d3.axisLeft(y)).style('font-size', '14px')

      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(
          d3
            .axisBottom(x)
            .tickSize(10) // Size of ticks
            .tickPadding(10) // Padding between ticks and labels
        )
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')
        .style('font-size', '18px')

      // Bars
      svg
        .selectAll('.uniqueBarName')
        .data(GDPArray)
        .join('rect')
        .attr('x', (d) => x(d.year))
        .attr('y', (d) => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', (d) => height - y(d.value))
        .attr('fill', (d) => getColour(d.value))
        .attr('class', (d) => getCSSClasses(d.value))
    }
  }
  useEffect(() => {
    draw()
  }, [GDPArray, averageGDPValue])

  return (
    <div className='gdpgraph' ref={graphcontainer}>
      <svg width={1296} height={500} id='barchart' ref={refSVG} />
    </div>
  )
}

export default CountryGDPCapita
