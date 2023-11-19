import PropertySearch from '../../../forms/property_search/PropertySearch'
import SlideShow from '../../slide_show/SlideShow'
import styles from './styles.module.scss'

function HomeHero() {
	const SlideShowImages = [
		{ url: './assets/images/slideshow/image-01.jpg', caption: 'image 01' },
		{ url: './assets/images/slideshow/image-02.jpg', caption: 'image 02' },
	]
	return (
		<>
			<div className={`${styles.homeHero}`}>
				<div className={`row ${styles.row}`}>
					<img
						className={`${styles.kim_headshot}`}
						src='./assets/images/layout/kim-lg.png'
					/>
					<PropertySearch
						intro={'New & Pre-Construction Condos for Sale & Lease'}
					/>
				</div>
				<div className={`${styles.slideshow_container}`}>
					<SlideShow images={SlideShowImages} duration={2000} />
				</div>{' '}
			</div>
		</>
	)
}

export default HomeHero
