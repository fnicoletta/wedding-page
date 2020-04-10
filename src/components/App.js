import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Registry from './Registry'
import RSVP from './RSVP'
import Photos from './Photos'
import OurStory from './OurStory'
import Navbar from './Navbar'

import '../assets/app.css'
import '../build/tailwind.css'

const App = () => {
	return (
		<main>
			<Navbar className="relative" />
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
