import React from 'react'

const Navbar = () => {
	return (
		<nav className="leading-tight flex justify-around text-xl corsiva-font">
			<a href="#info" className="clickable">
				Wedding Info
			</a>
			<a href="#rsvp" className="clickable">
				RSVP
			</a>
			<a href="#registry" className="clickable">
				Registry
			</a>
			<a href="#photos" className="clickable">
				Photos
			</a>
			<a href="#story" className="clickable">
				Our Story
			</a>
		</nav>
	)
}

export default Navbar
