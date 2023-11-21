import styles from './styles.module.scss'
import { Property_Interface } from '../../../interfaces/property'

function PropertyCard(property: Property_Interface) {
	return (
		<>
			<pre>{property.headline}</pre>
		</>
	)
}

export default PropertyCard
