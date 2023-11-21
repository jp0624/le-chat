import styles from './styles.module.scss'
import { Property_Interface } from '../../../interfaces/property'

function PropertyCard(property: Property_Interface) {
	return (
		<>
			<div className={`${styles.default}`}>{property.headline}</div>
		</>
	)
}

export default PropertyCard
