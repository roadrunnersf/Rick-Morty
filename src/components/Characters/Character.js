import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PhotoBox from './PhotoBox'
import NavBar from './../Layout/NavBar.js'

import fetchCharacters from './../../api/characters'

const Character = ({ match }) => {
  const [character, setCharacter] = useState({})

  const id = match.params.id
  useEffect(() => {
    fetchCharacters(id).then(response => {
      setCharacter(response)
    })
  }, [match])

  return (
    <div>
      <NavBar />
      <Link to={`/characters/${parseInt(id, 10) + 1}`}>
        {' '}
        <PhotoBox character={character} width={300} height={520} />
      </Link>{' '}
    </div>
  )
}

export default Character
