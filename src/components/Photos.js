import React from 'react'
import PictureCard from './PictureCard'
import styles from 'styled-components'

const imgArray = []

for (let i = 0; i < 10; i++) {
	imgArray.push(
		<img src={`https://picsum.photos/300?random=${i}`} key={i} alt="pic" />
	)
}

const StyledContainer = styles.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	background: papayawhip;
	z-index: 2;
`

const Photos = () => {
	return (
		<StyledContainer>
			<PictureCard img={imgArray} />
		</StyledContainer>
	)
}

export default Photos
