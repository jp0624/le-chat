import PropertyCard from '../../../cards/propertyCards/standardCard/PropertyCard'
import styles from './styles.module.scss'

import { usePropertyData } from '../../../../data/PropertyData/PropertyDataContext'

function PropertiesList() {
	const { PropertyData } = usePropertyData()
	console.log('PropertyData: ', PropertyData)
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
						{PropertyData.map((property: any, index: number) => (
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
