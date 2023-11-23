import styles from './styles.module.scss'
import { Slide } from 'react-slideshow-image'
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
function FeaturedCarousel({
	images,
	duration = 5000,
	transitionDuration = 1000,
}: SlideShowSettings) {
	return (
		<>
			<section className={`featured_container ${styles.featured_container}`}>
				<div className={`row`}>
					<Slide
						cssClass={'featured_carousel'}
						arrows={true}
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
					</Slide>
				</div>
			</section>
		</>
	)
}

export default FeaturedCarousel
