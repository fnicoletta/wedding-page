import React, { useState, useEffect } from 'react'

const Countdown = ({ date }) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(date) - +new Date()
		let timeLeft = {}

		if (difference > 0) {
			timeLeft = {
				Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				Minutes: Math.floor((difference / (1000 * 60)) % 60),
				// Seconds: Math.floor((difference / 1000) % 60),
			}
		}
		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)
	})

	const timerComponents = []

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval]) {
			return
		}

		const keyGen = Math.random()

		timerComponents.push(
			<span key={keyGen} className="">
				{timeLeft[interval]} {interval}{' '}
			</span>
		)
	})

	return (
		<div className="">
			<h1 className="font-header text-center elegant-font leading-tight">
				Franky & Megan
			</h1>
			<h2 className="text-center elegant-font text-5xl leading-tight">
				August 21, 2021
			</h2>
			<div>
				{timerComponents.length ? (
					<div className="text-center elegant-font text-3xl">
						{timerComponents} until I do!
					</div>
				) : (
					<span className="text-6xl text-center text-white font-serif">
						Today's the day!
					</span>
				)}
			</div>
		</div>
	)
}

export default Countdown
