import Page from '../components/Page'
import { Link } from 'react-router-dom'
import { GrDocumentMissing } from 'react-icons/gr'

const Error404 = () => {
  return (
    <Page classes='404 text-center'>
      <h1 className='mt-5 pt-5'>404 — Page Not Found</h1>
      <h2 className='mt-3 mb-5' style={{
        fontSize: '6rem',
        color: '#d3d3d3'
      }}>
        <GrDocumentMissing />
      </h2>
      <Link to='/'>Take me back!</Link>
    </Page>
  )
}

export default Error404
