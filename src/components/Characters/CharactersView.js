import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import CharactersViewBox from './CharactersViewBox'

const CharactersView = ({ characters }) => {
	return characters.map((character, index) => (
		<div
			style={{
				display: 'inline-block',
				padding: 5
			}}
		>
			<Helmet>
				<title>Character Viewer</title>
			</Helmet>

			<Link key={character.id} to={`/characters/${character.id}`}>
				<CharactersViewBox
					key={character.id}
					character={character}
					width={250}
					height={450}
				/>
			</Link>
		</div>
	))
}

export default CharactersView

// fetchCharacters(randList(493, 493))
//   .then(response =>
//     response.filter(
//       obj => obj.name.includes('Rick') && obj.name.includes('Tiny')
//     )
//   )
//   .then(response => {
//     setCharacters(response)
//   })
