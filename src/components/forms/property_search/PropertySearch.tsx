import { useState } from 'react'
import styles from './styles.module.scss'

function PropertySearch() {
	const [searchType, setSearchType] = useState('search_buy')

	const searchTypes = ['buy', 'lease']

	function toggleRadio(value: string) {
		setSearchType(value)
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
						{searchTypes.map((type) => (
							<label
								htmlFor={'search_' + type}
								className={`${
									searchType === 'search_' + type && styles.active
								}`}
							>
								<input
									onChange={() => toggleRadio('search_' + type)}
									type='radio'
									id={`search_${type}`}
									name='search_type'
									value='buy'
									checked={searchType === 'search_' + type && true}
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
