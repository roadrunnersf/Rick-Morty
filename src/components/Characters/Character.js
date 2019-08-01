import React, { useState, useEffect } from 'react'
//import { BrowserRouter as Link } from "react-router-dom";
import PhotoBox from './PhotoBox'
import NavBar from './../Layout/NavBar.js'

const Character = props => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    const id = props.match.params.id

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(jsonResponse => {
        setCharacter(jsonResponse)
      })
  }, [props.match])

  return (
    <div>
      <NavBar />
      <PhotoBox character={character} width={300} height={520} />
    </div>
  )
}

export default Character
