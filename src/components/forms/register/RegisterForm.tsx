import { useState } from 'react'
import styles from './styles.module.scss'

function RegisterForm() {
	const [registerType, setRegisterType] = useState('register_buying')

	const registerTypes = ['buying', 'selling', 'leasing']
	function toggleRadio(value: string) {
		setRegisterType(value)
	}
	return (
		<>
			<h2>Register with Us to Learn More About The Real Estate Market</h2>
			<form>
				<div className={`${styles.form_group} size_50`}>
					<input
						className={`size_50 ${styles.size_50}`}
						type='text'
						placeholder='First Name'
					/>
					<input
						className={`size_50 ${styles.size_50}`}
						type='text'
						placeholder='Last Name'
					/>
					<input
						className={`size_100 ${styles.size_100}`}
						type='email'
						placeholder='Email Address'
					/>
					<input
						className={`size_100 ${styles.size_100}`}
						type='phone'
						placeholder='Phone Number'
					/>
					<input
						className={`size_100 ${styles.size_100}`}
						type='text'
						placeholder='Are You A Realtor?'
					/>
				</div>
				<div className={`${styles.form_group} size_50`}>
					<p>Interested In</p>
					<div className={`${styles.register_types}`}>
						{registerTypes.map((type) => (
							<label
								htmlFor={'register_' + type}
								className={`${
									registerType === 'register_' + type && styles.active
								} size_33 ${styles.size_33}`}
							>
								<input
									onChange={() => toggleRadio('register_' + type)}
									type='radio'
									id={`register_${type}`}
									name='search_type'
									value={`register_${type}`}
									checked={registerType === 'register_' + type && true}
								/>
								<span>{type}</span>
							</label>
						))}
					</div>
					<textarea rows={5} cols={33} placeholder={'Your Comments'} />
				</div>
				<div className='break'></div>
				<div className={`${styles.form_group} size_100`}>
					<input
						type='submit'
						className={`${styles.search_submit}`}
						value='Start a Conversation'
					/>
				</div>
			</form>
		</>
	)
}

export default RegisterForm
