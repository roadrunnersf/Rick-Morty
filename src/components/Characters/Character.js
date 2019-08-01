import React, { useState, useEffect } from 'react'
//import { BrowserRouter as Link } from "react-router-dom";
import PhotoBox from './PhotoBox'
import NavBar from './../Layout/NavBar.js'

import fetchCharacters from './../../api/characters'

const Character = ({ match }) => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    const id = match.params.id

    fetchCharacters(id).then(response => {
      setCharacter(response)
    })
  }, [match])

  return (
    <div>
      <NavBar />
      <PhotoBox character={character} width={300} height={520} />
    </div>
  )
}

export default Character
