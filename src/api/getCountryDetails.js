const getCountryDetails = async (code) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data[0]
  } catch (error) {
    console.error(error)
    throw error // rethrow the error for handling in the calling code
  }
}

export default getCountryDetails
