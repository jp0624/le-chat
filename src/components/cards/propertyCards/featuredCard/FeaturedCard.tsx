// PropertyCard.tsx
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../state/store'
import { toggleFavorite } from '../../../../state/property_favorites/PropertyFavoritesSlice'

function FeaturedCard({ property }: any) {
	function numberWithCommas(x: number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}

	const favorites = useSelector((state: RootState) =>
		state.PropertyFavorites.value.length
			? state.PropertyFavorites.value
			: JSON.parse(localStorage.getItem('PropertyFavorites') || '[]')
	)
	const dispatch = useDispatch()

	return (
		<>
			<div
				className={`card card_property ${styles.card} ${styles.card_property}`}
			>
				<div className={`card_property_header ${styles.card_property_header}`}>
					<h3>{property.headline ? property.headline : property.address}</h3>
					<div
						className={`card_property_header_details ${styles.card_property_header_details}`}
					>
						<figure>
							<img
								src={property.images[0]}
								alt={`Property - ${property.headline}`}
							/>
						</figure>
						<p>{property.description !== '' && property.description}, </p>
					</div>
				</div>
				<div
					className={`card_property_details ${styles.card_property_details}`}
				>
					<div
						className={`property_favorite ${styles.property_favorite} `}
						onClick={() => dispatch(toggleFavorite(property.id))}
						title={`${
							favorites.includes(property.id) && styles.favorited
								? 'Click to Remove from Favorites'
								: 'Click to Add to Favorites'
						}`}
					>
						<i
							className={`icon icon_circle icon_heart ${styles.icon_heart} ${
								favorites.includes(property.id) && styles.favorited
							}`}
						></i>
					</div>
					<ul className={`features_list ${styles.features_list}`}>
						<li
							className={`features_list_location ${styles.features_list_location}`}
							title={`${property.building.location} Location`}
						>
							<h4>
								<i
									className={`icon icon_circle icon_location ${styles.icon_location}`}
								></i>
								Location
							</h4>
							<span>
								{property.address !== '' && property.address},{' '}
								{property.city !== '' && property.city},{' '}
								{property.province !== '' && property.province},{' '}
								{property.postal_code !== '' && property.postal_code}
							</span>
						</li>
						<li
							className={`features_list_price ${styles.features_list_price}`}
							title={`${property.building.price} price`}
						>
							<h4>
								<i
									className={`icon icon_circle icon_bedroom ${styles.icon_cost}`}
								></i>
								{property.price_title}
							</h4>
							<span>${numberWithCommas(property.price)}</span>
						</li>
						<li
							className={`features_list_bedrooms ${styles.features_list_bedrooms}`}
							title={`${property.building.bedrooms} Bedrooms`}
						>
							<h4>
								<i
									className={`icon icon_circle icon_bedroom ${styles.icon_bedroom}`}
								></i>
								Bedrooms
							</h4>
							<span>{property.building.bedrooms}</span>
						</li>

						<li
							className={`features_list_bathrooms ${styles.features_list_bathrooms}`}
							title={`${property.building.bathrooms} Bathrooms`}
						>
							<h4>
								<i
									className={`icon icon_circle icon_bathroom ${styles.icon_bathroom}`}
								></i>
								Bathrooms
							</h4>
							<span>{property.building.bathrooms}</span>
						</li>
						<li
							className={`features_list_parking ${styles.features_list_parking}`}
							title={`${property.building.parking} Parking Spaces`}
						>
							<h4>
								<i
									className={`icon icon_circle icon_parking ${styles.icon_parking}`}
								></i>
								Parking
							</h4>
							<span>{property.building.parking}</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default FeaturedCard
