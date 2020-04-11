import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
	height: max-content;
	width: max-content;
	margin: 0.5rem 0;
	transition: 1s;

	:hover {
		transform: scale(1.1);
	}
`

const PictureCard = ({ img }) => {
	return img.map((img) => <StyledCard key={img.key}>{img}</StyledCard>)
}

export default PictureCard
