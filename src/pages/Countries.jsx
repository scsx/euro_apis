import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Page from '../hooks/Page'

const Countries = () => {
  return (
    <Page classes='countries'>
      <h1>Countries</h1>
      <Link to="country">A country</Link>

      {/* <Outlet /> */}
    </Page>
  )
}

export default Countries
