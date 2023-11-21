import styles from './styles.module.scss'

function AwardsSection() {
	return (
		<>
			<section className={`awards_container ${styles.awards_container}`}>
				<div className={`${styles.row} row`}>
					<h2>Awards & Achievements</h2>
					<p>
						At Keller Williams, success is celebrated through an established
						award and recognition program, and we are honoured to continuously
						have our mission of providing industry-leading customer service and
						local expertise recognized
					</p>
					<div className={`${styles.awards_container}`}>
						<div className={`${styles.award}`}>
							<img src={'./assets/images/awards/platinum.png'} />
						</div>
						<div className={`${styles.award}`}>
							<img src={'./assets/images/awards/empire.png'} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AwardsSection
