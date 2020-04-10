import React, { useState } from 'react'

const Modal = (props) => {
	const { show, closeModal } = props
	const [plusOne, setPlusOne] = useState(false)

	const togglePlusOne = () => {
		setPlusOne(!plusOne)
	}

	return (
		<div className={show ? 'modal' : 'hide'}>
			<div className="bg-gray-500 max-content  m-auto p-5  corsiva-font">
				<button className="float-right" onClick={closeModal}>
					X
				</button>
				<form className="" action="">
					<label htmlFor="name" className="m-2">
						Name:{' '}
					</label>
					<input type="text" id="name" className="m-2" required />
					<br />
					<input
						id="plus-one"
						type="checkbox"
						value="Plus One:"
						onClick={togglePlusOne}
						className="m-2"
					/>
					<label htmlFor="plus-one">Plus One</label>
					<br />
					<div className={plusOne ? 'modal' : 'hide'}>
						<label htmlFor="name-plus-one" className="m-2">
							Name:{' '}
						</label>
						<input type="text" id="name-plus-one" className="m-2" />
					</div>
					<button className="border-transparent bg-white rounded-full py-2 px-4 m-2 clickable">
						RSVP
					</button>
				</form>
			</div>
		</div>
	)
}

export default Modal
