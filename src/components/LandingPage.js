import React from 'react'
import Countdown from './Countdown'
import WeddingInfo from './WeddingInfo'

const LandingPage = () => {
	return (
		<div>
			<div className="imgStyle">
				<div>
					<Countdown
						header="Franky and Megan"
						subheader="Aug 21, 2021"
						date="08-21-2021"
						countdownMessage="until I do!"
					/>
				</div>
			</div>
			<WeddingInfo />
		</div>
	)
}

export default LandingPage
