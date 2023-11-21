import AwardsSection from '../components/sections/awards/Awards'
import HomeHero from '../components/sections/hero/home_page/HomeHero'
import PropertiesList from '../components/sections/properties/properties_list/PropertiesList'
import RegistrationSection from '../components/sections/registration/Registration'
// import styles from './styles.module.scss'

const HomePage = () => {
	return (
		<>
			<HomeHero />
			<section className={`featured_container`}>
				<div className={`row`}>
					<p>Featured Properties</p>
				</div>
			</section>
			<RegistrationSection />
			<PropertiesList />
			<AwardsSection />
		</>
	)
}

export default HomePage
