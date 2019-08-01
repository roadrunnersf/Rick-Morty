const randList = (numMax, outputLength) => {
  let array = Array.from({ length: numMax }, (v, k) => k + 1)
  array = shuffle(array)
  return array.slice(0, outputLength)
}

const shuffle = oldArray => {
  let array = [...oldArray]
  var i = 0,
    j = 0,
    temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const arrKeys = arr => {
  return arr.map(obj => {
    return Object.keys(obj)[0]
  })
}

const arrVals = arr => {
  return arr.map(obj => {
    return Object.values(obj)[0]
  })
}

const arrMatches = arr => {
  const keys = arrKeys(arr)
  const values = arrVals(arr)
  let counter = 0
  for (var i = 0; i < arr.length; i++) {
    keys[i] === values[i] && counter++
  }
  return counter
}
const arrWrong = arr => {
  const keys = arrKeys(arr)
  const values = arrVals(arr)
  let counter = 0
  for (var i = 0; i < arr.length; i++) {
    values[i] && keys[i] !== values[i] && counter++
  }
  return counter
}

export { randList, shuffle, arrKeys, arrVals, arrMatches, arrWrong }
