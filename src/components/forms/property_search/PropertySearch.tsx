import { useState } from 'react'
import styles from './styles.module.scss'

function PropertySearch() {
	const [propertyType, setPropertyType] = useState('buy')

	const PropertyTypes = ['buy', 'lease']

	function togglePropertyTypeRadio(value: string) {
		setPropertyType(value)
	}
	return (
		<>
			<div className={`${styles.search_container}`}>
				{/* {intro.length > 0 && <p>{intro}</p>} */}
				<form>
					<input
						className={`${styles.search_value}`}
						type='text'
						placeholder='Location, Developer, Development, etc'
					/>
					<div className={`${styles.search_types}`}>
						{PropertyTypes.map((type, index) => (
							<label
								key={index}
								htmlFor={'search_' + type}
								className={`${propertyType === type && styles.active}`}
							>
								<input
									onChange={() => togglePropertyTypeRadio(type)}
									type='radio'
									id={`search_${type}`}
									name='search_type'
									value='buy'
									checked={propertyType === type}
								/>
								<span>{type}</span>
							</label>
						))}
					</div>
					<input
						type='submit'
						className={`${styles.search_submit}`}
						value='Search By Map'
					/>
				</form>
			</div>
		</>
	)
}

export default PropertySearch
