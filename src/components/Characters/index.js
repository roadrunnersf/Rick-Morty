import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import CharactersView from './CharactersView'
import NavBar from './../Layout/NavBar'

import { randList, shuffle } from './../../utils'
import fetchCharacters from './../../api/characters'

const Characters = () => {
	const [characters, setCharacters] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchCharacters(randList(493, 20)).then(response => {
			setCharacters(shuffle(response))
		})
		setLoading(false)
	}, [])

	return (
		<div>
			<NavBar />

			{loading ? (
				<h1>loading...</h1>
			) : (
				<CharactersView characters={characters} />
			)}
		</div>
	)
}

// filter(photo => photo.name.toLowerCase().includes("rick") && photo.name !== "Morty Jr's interviewer").
export default Characters
