const getCountryDetails = async (code) => {
  let countryData

  await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((response) => response.json())
    .then((data) => {
      countryData = data
    })
    .catch((error) => console.error(error))
    
  return countryData
}

export default getCountryDetails

/* useEffect(async () => {
  const data = await fetchData();
}, [fetchData]) */
