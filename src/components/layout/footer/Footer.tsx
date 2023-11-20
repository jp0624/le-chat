import BtmNav from '../nav/btm_nav/BtmNav'
import styles from './styles.module.scss'

const Footer = () => {
	return (
		<>
			<footer className={`${styles.default}`}>
				<div className={`${styles.bottom_nav} bg_klc bg_klc_red`}>
					<div className={`row ${styles.row}`}>
						<div className={`col ${styles.col} ${styles.col_1}`}>
							<div className={`logos_container ${styles.logos_container}`}>
								<figure className={`${styles.logo} ${styles.logo_klc}`}>
									<img
										src={'./assets/images/logo/logo-horz-white.png'}
										alt='Le-Chat Real Estate logo'
									/>
								</figure>
								<figure className={`${styles.logo} ${styles.logo_kw}`}>
									<img
										src={'./assets/images/logo/logo-kw-white.png'}
										alt='Kellar Williams logo'
									/>
								</figure>
							</div>
							<ul className={`contactList ${styles.contactList}`}>
								<li className={`phone ${styles.phone}`}>(647) 273-4575</li>
								<li className={`email ${styles.email}`}>kimlechat@kw.com </li>
							</ul>
						</div>
						<div className={`col ${styles.col} ${styles.col_2}`}>
							<BtmNav />
						</div>
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
