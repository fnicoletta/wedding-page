import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="static z-50 leading-tight flex justify-around text-xl corsiva-font bg-transparent">
			<Link to="/" className="clickable">
				Wedding Info
			</Link>
			<Link to="/rsvp" className="clickable">
				RSVP
			</Link>
			<Link to="/registry" className="clickable">
				Registry
			</Link>
			<Link to="/photos" className="clickable">
				Photos
			</Link>
			<Link to="/our-story" className="clickable">
				Our Story
			</Link>
		</nav>
	)
}

export default Navbar
