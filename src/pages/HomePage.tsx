import RegisterForm from '../components/forms/register/RegisterForm'
import AwardsSection from '../components/modules/awards/awards'
import HomeHero from '../components/modules/hero/home_page/HomeHero'
// import styles from './styles.module.scss'

const HomePage = () => {
	return (
		<>
			<HomeHero />
			<div className={`featured_container`}>
				<div className={`row`}>
					<p>Featured Properties</p>
				</div>
			</div>
			<RegisterForm />
			<div className={`properties_container`}>
				<div className={`row`}>
					<p>Properties List</p>
				</div>
			</div>
			<AwardsSection />
		</>
	)
}

export default HomePage
