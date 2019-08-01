import { randList } from './../../Functions'

const createCharacterList = matchObject => {
  const matchNum = matchObject.params.num

  const minItems = 2
  const maxItems = 8
  const defaultItems = 6

  let charIDs = undefined

  switch (true) {
    case matchNum > maxItems:
      charIDs = randList(493, maxItems)
      break
    case matchNum === 'test':
      charIDs = [1, 2, 3, 4]
      break
    case minItems <= matchNum && matchNum <= maxItems:
      charIDs = randList(493, matchNum)
      break
    case matchObject.path === '/guess':
    case matchNum < minItems:
    default:
      charIDs = randList(493, defaultItems)
      break
  }
  return charIDs
}

export default createCharacterList
