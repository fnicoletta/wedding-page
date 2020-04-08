import React from 'react'
import LandingPage from './LandingPage'
import WeddingInfo from './WeddingInfo'
import Registry from './Registry'
import RSVP from './RSVP'
import Photos from './Photos'
import OurStory from './OurStory'

import '../assets/app.css'
import '../build/tailwind.css'

const App = () => {
	return (
		<div>
			<LandingPage />
			<WeddingInfo />
			<RSVP />
			<Registry />
			<Photos />
			<OurStory />
		</div>
	)
}

export default App
