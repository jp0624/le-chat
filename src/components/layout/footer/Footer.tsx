import BtmNav from '../nav/btm_nav/BtmNav'
import styles from './styles.module.scss'

const Footer = () => {
	return (
		<>
			<footer className={`footer_default ${styles.default}`}>
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
								<li className={`phone ${styles.phone}`}>
									<i></i>
									<span>
										<a href='tel:&#054;&#052;&#055;&#045;&#050;&#055;&#051;&#045;&#052;&#053;&#055;&#053;'>
											(&#054;&#052;&#055;)&#032;&#050;&#055;&#051;&#045;&#052;&#053;&#055;&#053;
										</a>
									</span>
								</li>
								<li className={`email ${styles.email}`}>
									<i></i>
									<span>
										<a href='mailto:&#107;&#105;&#109;&#108;&#101;&#099;&#104;&#097;&#116;&#064;&#107;&#119;&#046;&#099;&#111;&#109;'>
											&#107;&#105;&#109;&#108;&#101;&#099;&#104;&#097;&#116;&#064;&#107;&#119;&#046;&#099;&#111;&#109;
										</a>
									</span>
								</li>
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
