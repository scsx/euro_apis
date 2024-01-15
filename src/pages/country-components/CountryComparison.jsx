const CountryComparison = ({ code, name, selectedCountry, getVisibleName }) => {
  const selectedCountryVisibleName = getVisibleName(selectedCountry)
  return (
    <div className='comparison'>
      <h3>Comparison</h3>
      <p>
        <b>
          {name} ({code})
        </b>{' '}
        vs{' '}
        <b>
          {selectedCountryVisibleName} ({selectedCountry})
        </b>
      </p>
      <h5>
        {code} vs {selectedCountry}
      </h5>
      <br />
      {name}
    </div>
  )
}

export default CountryComparison
