import { useParams } from 'react-router-dom'
import Page from '../hooks/Page'

const Country = () => {
  const { countryId } = useParams()

  return (
    <Page classes='country'>
      <h1>{ countryId }</h1>
    </Page>
  )
}

export default Country
