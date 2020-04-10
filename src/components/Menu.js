import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
	font-family: Monotype Corsiva;
	font-size: 1.3rem;
	padding: 2rem 0;
	font-weight: bold;
	color: black;
	text-decoration: none;
	transition: color 0.3s linear;

	&:hover {
		color: brown;
		cursor: pointer;
	}
`

const StyledMenu = styled.nav`
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #ffbd33;
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: transform 400ms ease-in-out;
`

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<StyledLink to="/" className="menu-items">
				Wedding Info
			</StyledLink>
			<StyledLink to="/rsvp" className="menu-items">
				RSVP
			</StyledLink>
			<StyledLink to="/registry" className="menu-items">
				Registry
			</StyledLink>
			<StyledLink to="/photos" className="menu-items">
				Photos
			</StyledLink>
			<StyledLink to="/our-story" className="menu-items">
				Our Story
			</StyledLink>
		</StyledMenu>
	)
}
export default Menu
