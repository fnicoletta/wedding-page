import React, { useState } from 'react'
import Modal from './Modal'
import styled from 'styled-components'

const StyledMain = styled.main`
	height: 100vh;
	width: 100%;
	background: papayawhip;
	display: flex;
	justify-content: center;
	align-items: center;
`

const RSVP = () => {
	const [toggleModal, setToggleModal] = useState(false)

	const openModal = () => setToggleModal(true)
	const closeModal = () => setToggleModal(false)

	return (
		<StyledMain>
			<div className="flex justify-center">
				{!toggleModal && (
					<button
						className=" corsiva-font border-transparent bg-red-100 rounded-full py-2 px-4 clickable"
						onClick={openModal}
					>
						RSVP
					</button>
				)}
			</div>
			<Modal closeModal={closeModal} show={toggleModal} />
		</StyledMain>
	)
}

export default RSVP
