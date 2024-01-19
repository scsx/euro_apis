import * as d3 from 'd3'
import { useEffect, useState, useRef } from 'react'

import GDPdata from '../../../data/other/unece/Population-density.json'
import Alert from 'react-bootstrap/Alert'
import Loading from '../../../components/Loading'

const CountryGDPCapita = ({ cca3 }) => {
  const [loading, setLoading] = useState(true)
  const [noDataMsg, setNoDataMsg] = useState('')

  console.log(GDPdata)

  const Barchart = () => {
    const graphcontainer = useRef()
    const refSVG = useRef()

    const data = [
      {
        Country: 'United States',
        Value: '12394'
      },
      {
        Country: 'Russia',
        Value: '6148'
      },
      {
        Country: 'Germany (FRG)',
        Value: '1653'
      },
      {
        Country: 'France',
        Value: '2162'
      }
    ]
    useEffect(() => {
      // Set the dimensions and geometrys of the graph
      const geometry = { top: 30, right: 30, bottom: 100, left: 60 },
        width = 1296 - geometry.left - geometry.right,
        height = 600 - geometry.top - geometry.bottom

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
        .domain(data.map((d) => d.Country))
        .padding(0.2)

      // Y axis
      const y = d3.scaleLinear().domain([0, 13000]).range([height, 0])
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
        .style('font-size', '14px')

      // Bars
      svg
        .selectAll('mybar')
        .data(data)
        .join('rect')
        .attr('x', (d) => x(d.Country))
        .attr('y', (d) => y(d.Value))
        .attr('width', x.bandwidth())
        .attr('height', (d) => height - y(d.Value))
        .attr('fill', '#5f0f40')
    }, [])

    return (
      <div className='graphbox' ref={graphcontainer}>
        <svg width={1460} height={800} id='barchart' ref={refSVG} />
      </div>
    )
  }

  return <Barchart />
}

export default CountryGDPCapita
