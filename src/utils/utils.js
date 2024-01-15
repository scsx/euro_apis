export const toLoc = (number) => {
  if (typeof number === 'string') {
    number = +number
  }

  return number.toLocaleString('fr-FR') // pt-PT doesn't format 7831 correctly
}

export const log = (msg) => {
  console.log(msg)
}

export const getFlagcdnFlag = (code, size = 'w80') => {
  let lowCode = code.toLowerCase()
  return `https://flagcdn.com/${size}/${lowCode}.png`
}
