export const toLocaleString = (number) => {
  if(typeof number === 'string') {
    number = +number
  }

  return number.toLocaleString('fr-FR') // pt-PT doesn't format 7831 correctly
}

export const calcPercentage = (total, part) => {
  return ((part * 100) / total).toFixed()
}
