import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

type SlideShowImage = {
	url: string
	caption: string
	color: string
}
type SlideShowSettings = {
	images: SlideShowImage[]
	duration?: number
	transitionDuration?: number
}

function SlideShow({
	images,
	duration = 5000,
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
					<div key={index} className={`${``}`}>
						<img
							style={{ width: '100%' }}
							src={fadeImage.url}
							alt={`Slide ${index + 1}`}
						/>
						<h2 className={`slideshow-text ${fadeImage.color}`}>
							{fadeImage.caption}
						</h2>
					</div>
				))}
			</Fade>
		</>
	)
}

export default SlideShow
