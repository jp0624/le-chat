import styles from './styles.module.scss'
// import { Property_Interface } from '../../../interfaces/property'

function PropertyCard({ property }: any) {
	console.log('property: ', property)

	function numberWithCommas(x: number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	return (
		<>
			<div
				className={`card card_property ${styles.card} ${styles.card_property}`}
			>
				<figure>
					<img
						src={property.images[0]}
						alt={`Property - ${property.headline}`}
					/>
				</figure>
				<div
					className={`card_property_details ${styles.card_property_details}`}
				>
					<h3>{property.headline}</h3>
					<h4>${numberWithCommas(property.price)}</h4>
					<p>
						{property.address !== '' && property.address},{' '}
						{property.city !== '' && property.city},{' '}
						{property.province !== '' && property.province},{' '}
						{property.postal_code !== '' && property.postal_code}
					</p>
					<p>{property.description !== '' && property.description}, </p>
					<ul className={`features_list ${styles.features_list}`}>
						{property.building && property.building.bedrooms && (
							<li
								className={`features_list_bedrooms ${styles.features_list_bedrooms}`}
								title={`Bedrooms`}
							>
								<i
									className={`icon icon_circle icon_bedroom ${styles.icon_bedroom}`}
								></i>
								<span>
									<em>{property.building.bedrooms}</em>
									<br />
									Bedrooms
								</span>
							</li>
						)}
						{property.building && property.building.bathrooms && (
							<li
								className={`features_list_bathrooms ${styles.features_list_bathrooms}`}
								title={`Bathrooms`}
							>
								<i
									className={`icon icon_circle icon_bathroom ${styles.icon_bathroom}`}
								></i>
								<span>
									<em>{property.building.bathrooms}</em>
									<br />
									Bathrooms
								</span>
							</li>
						)}
						{property.building && property.building.parking && (
							<li
								className={`features_list_parking ${styles.features_list_parking}`}
								title={`Parking Spaces`}
							>
								<i
									className={`icon icon_circle icon_parking ${styles.icon_parking}`}
								></i>
								<span>
									<em>{property.building.parking}</em>
									<br />
									Parking
								</span>
							</li>
						)}
					</ul>
					<a href='#'>Read More</a>
				</div>
			</div>
		</>
	)
}

export default PropertyCard
