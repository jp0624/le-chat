import PropertyCard from '../../../cards/propertyCards/standardCard/PropertyCard'
import styles from './styles.module.scss'

import { usePropertyData } from '../../../../data/PropertyData/PropertyDataContext'
// import { Property_Interface } from '../../../../interfaces/property'

function PropertiesList() {
	const { PropertyData } = usePropertyData()
	if (!PropertyData) {
		return <div>Loading...</div>
	}
	return (
		<>
			{/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
			<section
				className={`registration_container ${styles.registration_container}`}
			>
				<div className={`row ${styles.row}`}>
					<ul
						className={`card_list card_list_properties ${styles.card_list} ${styles.card_list_properties}`}
					>
						{PropertyData.map((property, index) => (
							<li key={index}>
								<PropertyCard property={property} />
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default PropertiesList
