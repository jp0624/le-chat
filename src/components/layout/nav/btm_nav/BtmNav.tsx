import { NavLink, useLocation } from 'react-router-dom'
import styles from './styles.module.scss'

const BtmNav = () => {
	const location = useLocation()
	return (
		<>
			<ul className={`btm_nav_container ${styles.btm_nav_container}`}>
				<li>
					<NavLink
						to='/About'
						className={`${styles.default} ${
							location.pathname === '/About' && styles.active
						}`}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/Mortgage_Calculator'
						className={`${styles.default} ${
							location.pathname === '/Mortgage_Calculator' && styles.active
						}`}
					>
						Mortgage Calculator
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/New_Listings'
						className={`${styles.default} ${
							location.pathname === '/New_Listings' && styles.active
						}`}
					>
						New Listings
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/Find_Your_Home'
						className={`${styles.default} ${
							location.pathname === '/Find_Your_Home' && styles.active
						}`}
					>
						Find Your Home
					</NavLink>
				</li>
			</ul>
		</>
	)
}

export default BtmNav
