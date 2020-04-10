import React, { useState } from 'react'
import Modal from './Modal'

const Registry = () => {
	const [toggleModal, setToggleModal] = useState(false)

	const openModal = () => setToggleModal(true)
	const closeModal = () => setToggleModal(false)

	return (
		<div>
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
		</div>
	)
}

export default Registry
