import { NavLink, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'

const TopNav = () => {
	const location = useLocation()
	return (
		<>
			<NavLink
				to='/About'
				className={`${styles.default} ${
					location.pathname === '/About' && styles.active
				}`}
			>
				About
			</NavLink>
			<NavLink
				to='/Mortgage_Calculator'
				className={`${styles.default} ${
					location.pathname === '/Mortgage_Calculator' && styles.active
				}`}
			>
				Mortgage Calculator
			</NavLink>
			<NavLink
				to='/New_Listings'
				className={`${styles.default} ${
					location.pathname === '/New_Listings' && styles.active
				}`}
			>
				New Listings
			</NavLink>
			<NavLink
				to='/Find_Your_Home'
				className={`${styles.default} ${
					location.pathname === '/Find_Your_Home' && styles.active
				}`}
			>
				Find Your Home
			</NavLink>
			<NavLink to='/New_Listings' className={`${styles.btn} ${styles.btn_red}`}>
				<i className={`${styles.icon} ${styles.icon_live_chat}`}></i>
				Start a Conversation
			</NavLink>
		</>
	)
}

export default TopNav
