import { useState } from 'react'
import styles from './styles.module.scss'

function PropertySearch({ intro = '' }) {
	const [searchType, setSearchType] = useState('search_buy')

	const searchTypes = ['buy', 'lease']

	function toggleRadio(value: string) {
		setSearchType(value)
	}
	return (
		<>
			<div className={`${styles.search_container}`}>
				{intro.length > 0 && <p>{intro}</p>}
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
						{/* <label
							htmlFor={'search_buy'}
							className={`${searchType === 'search_buy' && styles.active}`}
						>
							<input
								onChange={() => toggleRadio('search_buy')}
								type='radio'
								id='search_buy'
								name='search_type'
								value='buy'
								checked={searchType === 'search_buy' && true}
							/>
							<span>Buy</span>
						</label>
						<label
							htmlFor={'search_lease'}
							className={`${searchType === 'search_lease' && styles.active}`}
						>
							<input
								onChange={() => toggleRadio('search_lease')}
								type='radio'
								id='search_lease'
								name='search_type'
								value='lease'
								checked={searchType === 'search_lease' && true}
							/>
							<span>Lease</span>
						</label>
						<label
							htmlFor={'search_commercial'}
							className={`${
								searchType === 'search_commercial' && styles.active
							}`}
						>
							<input
								onChange={() => toggleRadio('search_commercial')}
								type='radio'
								id='search_commercial'
								name='search_type'
								value='commercial'
								checked={searchType === 'search_commercial' && true}
							/>
							<span>Commercial</span>
						</label> */}
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
