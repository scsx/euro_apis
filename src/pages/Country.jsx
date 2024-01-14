import { useParams } from 'react-router-dom'
import Page from '../hooks/Page'
import getCountries from '../api/getCountries'

const Country = () => {
  const { countryId } = useParams()
  console.log(getCountries())

  return (
    <Page classes='country'>
      <h1>{ countryId }</h1>
    </Page>
  )
}

export default Country
