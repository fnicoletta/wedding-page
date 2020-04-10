import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Registry from './components/Registry'
import RSVP from './components/RSVP'
import Photos from './components/Photos'
import OurStory from './components/OurStory'
import Burger from './components/Burger'
import Menu from './components/Menu'

import './assets/app.css'
import './build/tailwind.css'

const App = () => {
	const [open, setOpen] = useState(false)
	return (
		<main>
			<div>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
			<Switch>
				<Route path="/" component={LandingPage} exact />
				<Route path="/registry" component={Registry} />
				<Route path="/rsvp" component={RSVP} exact />
				<Route path="/photos" component={Photos} exact />
				<Route path="/our-story" component={OurStory} exact />
			</Switch>
		</main>
	)
}

export default App
