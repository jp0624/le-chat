import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
const Logo = () => {
	return (
		<>
			<NavLink to='/' className={`${styles.main_logo}`}>
				<img
					src='./assets/images/logo/logo-horz.svg'
					alt='Le-Chat Real Estate'
				/>
			</NavLink>
		</>
	)
}

export default Logo
