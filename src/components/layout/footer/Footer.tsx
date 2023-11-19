import styles from './styles.module.scss'

const Footer = () => {
	return (
		<>
			<footer className={`${styles.default}`}>
				<div className={`${styles.copyright} bg_klc bg_klc_red`}>
					<div className={`row ${styles.row}`}>
						<p>Footer Nav</p>
					</div>
				</div>
				<div className={`${styles.copyright} bg_klc bg_klc_black`}>
					<div className={`row ${styles.row}`}>
						<p>Copyright © 2023 Le-Chat Real Estate. All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
