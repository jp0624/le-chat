import RegisterForm from '../../forms/register/RegisterForm'
import styles from './styles.module.scss'

function RegistrationSection() {
	return (
		<>
			<section
				className={`registration_container ${styles.registration_container} bg_klc bg_klc_black`}
			>
				<div className={`row ${styles.row}`}>
					<RegisterForm />
				</div>
			</section>
		</>
	)
}

export default RegistrationSection
