import TopNav from '../nav/top_nav/TopNav'
import Logo from '../logo/logo'
import styles from './styles.module.scss'

const Header = () => {
	return (
		<>
			<header className={`${styles.default} bg_klc bg_klc_black`}>
				<div className={`row ${styles.row}`}>
					<Logo />
					<TopNav />
				</div>
			</header>
		</>
	)
}

export default Header
