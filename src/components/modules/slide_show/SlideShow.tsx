import { useEffect, useState } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

type SlideShowImage = {
	url: string
	caption: string
}
type SlideShowSettings = {
	images: SlideShowImage[]
	duration?: number
	transitionDuration?: number
}

function SlideShow({
	images,
	duration = 1000,
	transitionDuration = 1000,
}: SlideShowSettings) {
	return (
		<>
			<Fade
				arrows={false}
				duration={duration}
				transitionDuration={transitionDuration}
				pauseOnHover={false}
			>
				{images.map((fadeImage, index) => (
					<div key={index}>
						<img
							style={{ width: '100%' }}
							src={fadeImage.url}
							alt={`Slide ${index + 1}`}
						/>
						<h2>{fadeImage.caption}</h2>
					</div>
				))}
			</Fade>
		</>
	)
}

export default SlideShow
