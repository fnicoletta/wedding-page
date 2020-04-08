import React from 'react'
import Countdown from './Countdown'
import Navbar from './Navbar'

const LandingPage = () => {
	const imgStyle = {
		backgroundImage:
			"url('https://lh3.googleusercontent.com/89O2keouRLi_kIyur5Q-WeLltLhkip4gInONj6te4mS97YvcyW1Lm-v5P74QZ2sWMfbUwV7lBN4xlbTDwwVGYBjbjNwWo3xmS0c-1wdkdunfKJT9cmtlw064Bkr8zHx9fwSyfv--Xm-bJf3JSXtWKZ7bwlVHvviVcmWulu7IuXX_2ZyQBLacfMIchEcSeHkdeAvNqqY9kFAyfDo5eTGsvtTvKl8Hn2G5BAbmTaSFq4BJguFPgaqbHvaMVEGzcIjl_0VhoAIG9khFtnT-PPev1RJH9fL9Ig_2tCcJrOacXi60I9cI4t1hTpWa8EBce3EtOivBylkCLqm3xPFW7F6ibRSGntZSsv-AntJoSP-64KkKs5ScOCC9q1NcjLvb_aBbvlsomcFiWeoOeBdugBSuvEuW2aWFstM3nMFPRI7g8f10Mm2dMcDdOvt2M7b1MhskUVcrjEcEuekj1hFiJ4BXOEzieHXqarmnEoSGoxGdIPNy2htOqr2q3bMIGKFW9cAJFFmo6kz8Jco3est_x4zUEmAprbDD8Nv43Lgsrvy4rsniZ2pZh-lQa42eSGHUazETL53lfek2rXkT9aWKQIml6zIanlk8Il2ZLNKd_Y8v9O_lkYRk6DSxsG2P9PFEG0x3AVlG_sJvR4EiPYxprLafqwg2NQZmOeuk_tgeG025IMvhLBvPzRFpyHSo_eqmZA=w500-h333-no')",
		width: '100%',
		height: '100vh',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative',
	}

	return (
		<div style={imgStyle}>
			<div>
				<Navbar />
				<Countdown date="'08-21-2021'" />
			</div>
		</div>
	)
}

export default LandingPage
