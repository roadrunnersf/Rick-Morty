import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'

import Characters from './Characters'
import CharactersViewSingle from './Characters/CharactersViewSingle'
import Guess from './Guess'

const Root = () => (
	<div>
		<Router>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/characters" />} />
				<Route exact path="/characters" component={Characters} />
				<Route path="/characters/:id" component={CharactersViewSingle} />
				<Route exact path="/guess" component={Guess} />
				<Route path="/guess/:num" component={Guess} />
			</Switch>
		</Router>
	</div>
)

export default Root
