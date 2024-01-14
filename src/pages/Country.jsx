import { useParams } from 'react-router-dom'
import Page from '../hooks/Page'

const Country = () => {
  const { country } = useParams()


  console.log(country)
  return (
    <Page classes='country'>
      <h1>{ country }</h1>
    </Page>
  )
}

export default Country
