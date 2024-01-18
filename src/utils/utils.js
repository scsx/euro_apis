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

// Takes two arrays to check which index returns a non-empty value to both of them (counting backwards)
export const getLastCommonEntry = (arr1, arr2) => {
  // Create a copy before reversing to avoid modifying the original array
  const revArr1 = arr1.slice().reverse()
  const revArr2 = arr2.slice().reverse()

  for (
    let index = 0;
    index < Math.min(revArr1.length, revArr2.length);
    index++
  ) {
    if (revArr1[index] !== '' && revArr2[index] !== '') {
      let unreversedIndex = revArr1.length - (index + 1)
      return unreversedIndex
    }
  }
  // Return -1 if no common non-empty entry is found
  return -1
}
