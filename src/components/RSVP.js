import React, { useState } from 'react'
import Modal from './Modal'
import styled, { keyframes } from 'styled-components'

const StyledMain = styled.main`
	height: 100vh;
	width: 100vw;
	background: #fffaf2;
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledText = styled.div`
	padding: 1rem;
	border-radius: 10px;
	box-shadow: 3px 3px 5px 6px #ccc;
	background: darkred;
	min-height: 30rem;
	height: max-content;
	width: max-content;
	text-align: center;
	font-family: Monotype Corsiva;
	color: #fffaf2;
	font-size: 2.5rem;
	display: flex;
	flex-direction: column;
`
const StyledButton = styled.button`
	font-size: 2rem;
	width: 6rem;
	height: 3rem;
	border: solid papayawhip 0.1rem;
	border-radius: 10px;
	transition: 0.5s;

	:hover {
		background: papayawhip;
		color: darkred;
	}
`

const bounce = keyframes`
		0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
	40% {
    transform: translateY(-30px);
  }
	60% {
    transform: translateY(-15px);
  }

`

const StyledIcon = styled.i`
	display: ${({ toggleModal }) => (toggleModal ? 'none' : 'block')};
	color: papayawhip;
	margin: 6rem 0;
	animation: ${bounce} 2s ease-out infinite;
`

const RSVP = () => {
	const [toggleModal, setToggleModal] = useState(false)

	const openModal = () => setToggleModal(true)
	const closeModal = () => setToggleModal(false)

	return (
		<StyledMain>
			<StyledText>
				Want to come to our wedding?
				<br />
				Let us know!
				<StyledIcon
					toggleModal={toggleModal}
					className="fas fa-arrow-down"
				></StyledIcon>
				<div>
					{!toggleModal && (
						<StyledButton onClick={openModal}>RSVP</StyledButton>
					)}
				</div>
				<Modal closeModal={closeModal} show={toggleModal} />
			</StyledText>
		</StyledMain>
	)
}

export default RSVP
