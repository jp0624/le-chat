import AwardsSection from '../components/sections/awards/Awards'
import HomeHero from '../components/sections/hero/home_page/HomeHero'
import FeaturedCarousel from '../components/sections/properties/featured_carousel/FeaturedCarousel'
import PropertiesList from '../components/sections/properties/properties_list/PropertiesList'
import RegistrationSection from '../components/sections/registration/Registration'
// import styles from './styles.module.scss'

const HomePage = () => {
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
			<HomeHero />
			<FeaturedCarousel images={SlideShowImages} />
			<RegistrationSection />
			<PropertiesList />
			<AwardsSection />
		</>
	)
}

export default HomePage
