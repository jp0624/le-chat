import styles from './styles.module.scss'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import FeaturedCard from '../../../cards/propertyCards/featuredCard/FeaturedCard'
import { usePropertyData } from '../../../../data/PropertyData/PropertyDataContext'

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
	duration = 5000,
	transitionDuration = 1000,
}: SlideShowSettings) {
	const { PropertyData } = usePropertyData()
	if (!PropertyData) {
		return <div>Loading...</div>
	}
	return (
		<>
			<section className={`featured_container ${styles.featured_container}`}>
				<div className={`row`}>
					<ul className={`${styles.slideshow_container}`}>
						<Slide
							cssClass={'featured_carousel'}
							arrows={true}
							duration={duration}
							transitionDuration={transitionDuration}
							pauseOnHover={false}
						>
							{PropertyData.map((property, index) => (
								<li key={index}>
									<FeaturedCard property={property} />
								</li>
							))}
						</Slide>
					</ul>
				</div>
			</section>
		</>
	)
}

export default FeaturedCarousel
