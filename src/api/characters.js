const fetchCharacters = chars =>
  fetch(`https://rickandmortyapi.com/api/character/${chars}`).then(response => {
    return response.json()
  })

export default fetchCharacters
