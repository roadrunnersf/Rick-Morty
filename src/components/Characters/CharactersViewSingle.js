import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import CharactersViewBox from './CharactersViewBox'
import NavBar from './../Layout/NavBar.js'

import fetchCharacters from './../../api/characters'

const CharactersViewSingle = ({ match }) => {
  const [character, setCharacter] = useState({})

  const id = match.params.id
  useEffect(() => {
    fetchCharacters(id).then(response => {
      setCharacter(response)
    })
  }, [match])
  return (
    <div>
      <Helmet>
        <title>{character.name && character.name}</title>
      </Helmet>
      <NavBar />
      <Link to={`/characters/${parseInt(id, 10) + 1}`}>
        {' '}
        <CharactersViewBox character={character} width={300} height={520} />
      </Link>{' '}
    </div>
  )
}

export default CharactersViewSingle
