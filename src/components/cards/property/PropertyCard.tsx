import styles from './styles.module.scss'
import { Property_Interface } from '../../../interfaces/property'

function PropertyCard({ property }) {
	console.log('property: ', property)
	return (
		<>
			<div
				className={`card card_property ${styles.card} ${styles.card_property}`}
			>
				<figure>
					<img src={`${property.images[0]}`} />
				</figure>
				{property.headline}
				{property.listing_type !== '' && property.listing_type}
				{property.price}
			</div>
		</>
	)
}

export default PropertyCard
