import { useState } from 'react'
import styles from './styles.module.scss'

function RegisterForm() {
	const [registerType, setRegisterType] = useState('buying')
	const [isRealtor, setIsRealtor] = useState('no')

	const registerTypes = ['buying', 'selling', 'leasing']
	function toggleRegisterTypesRadio(value: string) {
		setRegisterType(value)
	}
	const isRealtorType = ['yes', 'no']
	function toggleIsRealtorRadio(value: string) {
		setIsRealtor(value)
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
					<div className={`${styles.realtor_boolean}`}>
						<p>Are you a Realtor?</p>
						<div className={`${styles.realtor_types}`}>
							{isRealtorType.map((type, index) => (
								<label
									key={index}
									htmlFor={'realtor_' + type}
									className={`${isRealtor === type && styles.active} size_50 ${
										styles.size_50
									}`}
								>
									<input
										onChange={() => toggleIsRealtorRadio(type)}
										type='radio'
										id={`realtor_${type}`}
										name='realtor_type'
										value={`realtor_${type}`}
										checked={isRealtor === type && true}
									/>
									<span>{type}</span>
								</label>
							))}
						</div>
					</div>
				</div>
				<div className={`${styles.form_group} size_50`}>
					<p>Interested In:</p>
					<div className={`${styles.register_types}`}>
						{registerTypes.map((type, index) => (
							<label
								key={index}
								htmlFor={'register_' + type}
								className={`${registerType === type && styles.active} size_33 ${
									styles.size_33
								}`}
							>
								<input
									onChange={() => toggleRegisterTypesRadio(type)}
									type='radio'
									id={`register_${type}`}
									name='search_type'
									value={`register_${type}`}
									checked={registerType === type && true}
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
