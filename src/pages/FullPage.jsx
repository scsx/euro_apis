import Page from '../hooks/Page'
import './FullPage.scss'

const FullPage = () => {
 
  return (
    <Page noVertPadding={true} fullWidth={true} classes='fullpage text-center'>
      <h1 className='mt-5'>FullPage</h1>
    </Page>
  )
}

export default FullPage
