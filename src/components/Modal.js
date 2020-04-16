import React, { useState } from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
	display: ${({ show }) => (show ? 'flex' : 'none')};
	margin-top: 2rem;

	span {
		float: right;
		cursor: pointer;
	}

	input {
		border: 0.01rem solid orangered;
	}

	#plus-one {
		margin: 2rem 0 2rem 1rem;
	}
`

const StyledButton = styled.button`
	border: 0.22rem solid #cd5c5c;
	background: #cd5c5c;
	padding: 0.5rem 1rem;
	border-radius: 25px;
	transition: 0.5s;
	color: cornsilk;
	font-weight: bold;

	:hover {
		background: cornsilk;
		color: #cd5c5c;
	}
`

const StyledContainer = styled.div`
	height: max-content;
	width: auto;
	margin: auto;
	border: 0.3rem solid #e19d9d;
	border-radius: 10px;
	box-shadow: 3px 3px 5px 6px maroon;
	background: #e19d9d;
	color: black;
	padding: 0.6rem 1rem;
	font-family: Monotype Corsiva;
	font-size: 1.5rem;
`

const StyledPlusOne = styled.div`
	display: ${({ plusOne }) => (plusOne ? 'block' : 'none')};
`

const Modal = (props) => {
	const { show, closeModal } = props
	const [plusOne, setPlusOne] = useState(false)

	const togglePlusOne = () => {
		setPlusOne(!plusOne)
	}

	return (
		<StyledMain show={show}>
			<StyledContainer>
				<span onClick={closeModal}>X</span>
				<form>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" required />
					<br />
					<input
						id="plus-one"
						type="checkbox"
						value="Plus One:"
						onClick={togglePlusOne}
					/>
					<label htmlFor="plus-one">Plus One</label>
					<StyledPlusOne plusOne={plusOne}>
						<label htmlFor="name-plus-one">Name</label>
						<br />
						<input type="text" id="name-plus-one" />
					</StyledPlusOne>
					<br />
					<StyledButton>RSVP</StyledButton>
				</form>
			</StyledContainer>
		</StyledMain>
	)
}

export default Modal
