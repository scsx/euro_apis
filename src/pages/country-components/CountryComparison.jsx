import Table from 'react-bootstrap/Table'

const CountryComparison = ({ code, name, selectedCountry, getVisibleName }) => {
  const selectedCountryVisibleName = getVisibleName(selectedCountry)
  return (
    <div className='comparison'>
      <p>
        {name} <small>({code})</small>
        <b> vs </b>
        {selectedCountryVisibleName} <small>({selectedCountry})</small>
      </p>

      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>PT</th>
            <th>NL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Area</td>
            <td>41 850km²</td>
            <td>71 850km²</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>16 655 799</td>
            <td>1 655 799</td>
          </tr>
          <tr>
            <td>tld</td>
            <td>.nl</td>
            <td>.pt</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default CountryComparison
