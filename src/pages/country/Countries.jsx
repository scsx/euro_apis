import { ErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Page from '../../components/Page'
import ErrorBoundaryComponent from '../../components/ErrorBoundaryComponent'
import { getFlagcdnFlag } from '../../utils/utils'
import './Countries.scss'

const Countries = () => {
  const countryList = useSelector((state) => state.allCountries.allCountries)

  return (
    <Page classes='countries'>
      <h1 className='mb-5'>Countries</h1>
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryComponent}
        onReset={() => {}}
        resetKeys={['someKey']}>
        <div className='countrieslist'>
          {countryList.length > 0 &&
            countryList.map((country) => {
              return (
                <div className='countrieslist__item' key={country.code}>
                  <div className='countrieslist__flag' style={{
                    backgroundImage: `url(${getFlagcdnFlag(country.code, 'w160')})`
                  }}></div>
                  <Link to={country.code} className='countrieslist__link'>
                    {country.name}
                    <small>{country.code}</small>
                  </Link>
                </div>
              )
            })}
        </div>
      </ErrorBoundary>
    </Page>
  )
}

export default Countries
