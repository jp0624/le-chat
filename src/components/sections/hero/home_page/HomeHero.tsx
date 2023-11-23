import PropertySearch from '../../../forms/property_search/PropertySearch'
import SlideShow from '../background_slideshow/SlideShow'
import styles from './styles.module.scss'

function HomeHero() {
	const SlideShowImages = [
		{
			url: './assets/images/slideshow/image-01.jpg',
			caption: 'New & Pre-Construction Condos',
			color: 'white',
		},
		{
			url: './assets/images/slideshow/image-02.jpg',
			caption: 'New & Pre-Construction Condos for Sale & Lease',
			color: 'black',
		},
	]
	return (
		<>
			<section className={`hero_container_home ${styles.hero_container_home}`}>
				<div className={`row ${styles.row}`}>
					<img
						className={`${styles.kim_headshot}`}
						src='./assets/images/layout/kim-lg.png'
					/>
					<PropertySearch />
				</div>
				<div className={`${styles.slideshow_container}`}>
					<SlideShow images={SlideShowImages} duration={2000} />
				</div>{' '}
			</section>
		</>
	)
}

export default HomeHero
