import * as d3 from 'd3'
import { useEffect, useState, useRef } from 'react'

import GDPdata from '../../../data/other/unece/GDP-per-capita.json'
import Alert from 'react-bootstrap/Alert'
import Loading from '../../../components/Loading'

const CountryGDPCapita = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [GDPArray, setGDPArray] = useState([])
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
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [cca3])

  useEffect(() => {
    // Set the dimensions and geometrys of the graph
    const geometry = { top: 30, right: 30, bottom: 100, left: 60 },
      width = 1296 - geometry.left - geometry.right,
      height = 800 - geometry.top - geometry.bottom

    // Append the svg object to the body of the page
    const svg = d3
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
    const y = d3.scaleLinear().domain([7000, 140000]).range([height, 0])
    svg.append('g').call(d3.axisLeft(y)).style('font-size', '14px')

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickSize(10) // Adjust the size of ticks
          .tickPadding(10) // Adjust the padding between ticks and labels
      )
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end')
      .style('font-size', '18px')

    // Bars
    svg
      .selectAll('mybar')
      .data(GDPArray)
      .join('rect')
      .attr('x', (d) => x(d.year))
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.value))
      .attr('fill', '#5f0f40')
  }, [GDPArray])

  return (
    <div className='graphbox' ref={graphcontainer}>
      <svg width={1296} height={800} id='barchart' ref={refSVG} />
    </div>
  )
}

export default CountryGDPCapita
