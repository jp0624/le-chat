import RegisterForm from '../components/forms/register/RegisterForm'
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
			<div className={`awards_container`}>
				<div className={`row`}>
					<p>Awards</p>
				</div>
			</div>
		</>
	)
}

export default HomePage
