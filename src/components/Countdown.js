import React, { useState, useEffect } from 'react'

const Countdown = ({
	date,
	header,
	subheader,
	finishedMessage,
	countdownMessage,
}) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(date) - +new Date()
		let timeLeft = {}

		if (difference > 0) {
			timeLeft = [
				Math.floor(difference / (1000 * 60 * 60 * 24)),
				Math.floor((difference / (1000 * 60 * 60)) % 24),
				Math.floor((difference / (1000 * 60)) % 60),
				Math.floor((difference / 1000) % 60),
			]
		}
		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const countdown = setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)
		return () => clearTimeout(countdown)
	})

	return (
		<div className="mt-3">
			<h1 className="font-header text-center elegant-font leading-tight">
				{header}
			</h1>
			<h2 className="text-center elegant-font text-5xl leading-tight">
				{subheader}
			</h2>
			<div>
				<div className="text-center elegant-font text-3xl">
					<span>
						{timeLeft[0]} Days, {timeLeft[1]} Hours, {timeLeft[2]} Minutes
						and {timeLeft[3]} Seconds {countdownMessage}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Countdown
