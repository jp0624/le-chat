import PropertyCard from '../../../cards/property/PropertyCard'
import styles from './styles.module.scss'
// import { Property_Interface } from '../../../../interfaces/property'

function PropertiesList() {
	const properties = [
		{
			images: ['/assets/images/temp/temp-property-02.jpg'],
			headline: 'Reside on Richmond1',
			featured: true,
			featured_title: 'Platinum Access',
			listing_type: 'sale',
			listing_by_title: 'Development by:',
			listing_by: 'Owner',
			address: '123 Main St',
			city: 'Toronto',
			province: 'ON',
			postal_code: 'M4Y 1T5',
			price_title: 'Asking price',
			price: 500000,
			move_in_date: 'Dec 1st',
			description:
				'Beautiful & Spacious 4 Bedrooms End unit Townhouse W/Walk-Out Basement *North-Facing* Backing On To Ravine * Feels Like A Semi-Detach. Great Layout, Separate Fm & Liv. Rm, Bright & Spacious Kitchen W/Granite Counter Top, S/S Appliances. 4 Good Size Bdrms. Master Brm W/5Pc-Ensuite W/I Closet. Laminate Floors, Ent. From Garage To Inside Home, No Sidewalk ,Child Safe Road . Close To School, Plaza & Public Transit..',
			summary: {
				property_type: 'Single Family',
				building_type: 'Row / Townhouse',
				storeys: 2,
				community_name: 'Sandringham-Wellington',
				title: 'Freehold',
				land_size: '26.08 x 105.61 FT ; *Ravine Lot*',
				annual_property_taxes: 4687.29,
				parking_type: 'Garage',
				listed_time: '26 minutes',
			},
			building: {
				bedrooms: { above_grade: 4 },
				bathrooms: { total: 3 },
				interior_features: {
					basement_features: 'Walk out',
					basement_type: 'N/A (Unfinished)',
				},
				building_features: {
					features: 'Ravine',
					style: 'Attached',
				},
				heating_cooling: {
					cooling: 'Central air conditioning',
					heating: 'Forced air (Natural gas)',
				},
				exterior_features: {
					exterior_finish: 'Brick',
				},
				neighbourhood_features: {
					amenities_nearby: 'Hospital, Park, Place of Worship, Public Transit',
				},
				parking: {
					type: 'Garage',
					spaces: 2,
				},
			},
		},
		{
			images: ['/assets/images/temp/temp-property-02.jpg'],
			headline: 'Reside on Richmond2',
			featured: true,
			featured_title: 'Platinum Access',
			listing_type: 'sale',
			listing_by_title: 'Development by:',
			listing_by: 'Owner',
			address: '123 Main St',
			city: 'Toronto',
			province: 'ON',
			postal_code: 'M4Y 1T5',
			price_title: 'Asking price',
			price: 500000,
			move_in_date: 'Dec 1st',
			description:
				'Beautiful & Spacious 4 Bedrooms End unit Townhouse W/Walk-Out Basement *North-Facing* Backing On To Ravine * Feels Like A Semi-Detach. Great Layout, Separate Fm & Liv. Rm, Bright & Spacious Kitchen W/Granite Counter Top, S/S Appliances. 4 Good Size Bdrms. Master Brm W/5Pc-Ensuite W/I Closet. Laminate Floors, Ent. From Garage To Inside Home, No Sidewalk ,Child Safe Road . Close To School, Plaza & Public Transit..',
			summary: {
				property_type: 'Single Family',
				building_type: 'Row / Townhouse',
				storeys: 2,
				community_name: 'Sandringham-Wellington',
				title: 'Freehold',
				land_size: '26.08 x 105.61 FT ; *Ravine Lot*',
				annual_property_taxes: 4687.29,
				parking_type: 'Garage',
				listed_time: '26 minutes',
			},
			building: {
				bedrooms: { above_grade: 4 },
				bathrooms: { total: 3 },
				interior_features: {
					basement_features: 'Walk out',
					basement_type: 'N/A (Unfinished)',
				},
				building_features: {
					features: 'Ravine',
					style: 'Attached',
				},
				heating_cooling: {
					cooling: 'Central air conditioning',
					heating: 'Forced air (Natural gas)',
				},
				exterior_features: {
					exterior_finish: 'Brick',
				},
				neighbourhood_features: {
					amenities_nearby: 'Hospital, Park, Place of Worship, Public Transit',
				},
				parking: {
					type: 'Garage',
					spaces: 2,
				},
			},
		},
		{
			images: ['/assets/images/temp/temp-property-02.jpg'],
			headline: 'Reside on Richmond2',
			listing_type: 'sale',
			listing_by_title: 'Development by:',
			listing_by: 'Owner',
			address: '123 Main St',
			city: 'Toronto',
			province: 'ON',
			postal_code: 'M4Y 1T5',
			price_title: 'Asking price',
			price: 500000,
			move_in_date: 'Dec 1st',
			description:
				'Beautiful & Spacious 4 Bedrooms End unit Townhouse W/Walk-Out Basement *North-Facing* Backing On To Ravine * Feels Like A Semi-Detach. Great Layout, Separate Fm & Liv. Rm, Bright & Spacious Kitchen W/Granite Counter Top, S/S Appliances. 4 Good Size Bdrms. Master Brm W/5Pc-Ensuite W/I Closet. Laminate Floors, Ent. From Garage To Inside Home, No Sidewalk ,Child Safe Road . Close To School, Plaza & Public Transit..',
			summary: {
				property_type: 'Single Family',
				building_type: 'Row / Townhouse',
				storeys: 2,
				community_name: 'Sandringham-Wellington',
				title: 'Freehold',
				land_size: '26.08 x 105.61 FT ; *Ravine Lot*',
				annual_property_taxes: 4687.29,
				parking_type: 'Garage',
				listed_time: '26 minutes',
			},
			building: {
				bedrooms: { above_grade: 4 },
				bathrooms: { total: 3 },
				interior_features: {
					basement_features: 'Walk out',
					basement_type: 'N/A (Unfinished)',
				},
				building_features: {
					features: 'Ravine',
					style: 'Attached',
				},
				heating_cooling: {
					cooling: 'Central air conditioning',
					heating: 'Forced air (Natural gas)',
				},
				exterior_features: {
					exterior_finish: 'Brick',
				},
				neighbourhood_features: {
					amenities_nearby: 'Hospital, Park, Place of Worship, Public Transit',
				},
				parking: {
					type: 'Garage',
					spaces: 2,
				},
			},
		},
		{
			images: ['/assets/images/temp/temp-property-02.jpg'],
			headline: 'Reside on Richmond2',
			featured: true,
			featured_title: 'Platinum Access',
			listing_type: 'sale',
			listing_by_title: 'Development by:',
			listing_by: 'Owner',
			address: '123 Main St',
			city: 'Toronto',
			province: 'ON',
			postal_code: 'M4Y 1T5',
			price_title: 'Asking price',
			price: 500000,
			move_in_date: 'Dec 1st',
			description:
				'Beautiful & Spacious 4 Bedrooms End unit Townhouse W/Walk-Out Basement *North-Facing* Backing On To Ravine * Feels Like A Semi-Detach. Great Layout, Separate Fm & Liv. Rm, Bright & Spacious Kitchen W/Granite Counter Top, S/S Appliances. 4 Good Size Bdrms. Master Brm W/5Pc-Ensuite W/I Closet. Laminate Floors, Ent. From Garage To Inside Home, No Sidewalk ,Child Safe Road . Close To School, Plaza & Public Transit..',
			summary: {
				property_type: 'Single Family',
				building_type: 'Row / Townhouse',
				storeys: 2,
				community_name: 'Sandringham-Wellington',
				title: 'Freehold',
				land_size: '26.08 x 105.61 FT ; *Ravine Lot*',
				annual_property_taxes: 4687.29,
				parking_type: 'Garage',
				listed_time: '26 minutes',
			},
			building: {
				bedrooms: { above_grade: 4 },
				bathrooms: { total: 3 },
				interior_features: {
					basement_features: 'Walk out',
					basement_type: 'N/A (Unfinished)',
				},
				building_features: {
					features: 'Ravine',
					style: 'Attached',
				},
				heating_cooling: {
					cooling: 'Central air conditioning',
					heating: 'Forced air (Natural gas)',
				},
				exterior_features: {
					exterior_finish: 'Brick',
				},
				neighbourhood_features: {
					amenities_nearby: 'Hospital, Park, Place of Worship, Public Transit',
				},
				parking: {
					type: 'Garage',
					spaces: 2,
				},
			},
		},
	]
	return (
		<>
			<section
				className={`registration_container ${styles.registration_container}`}
			>
				<div className={`row ${styles.row}`}>
					<ul
						className={`card_list card_list_properties ${styles.card_list} ${styles.card_list_properties}`}
					>
						{properties.map((property, index) => (
							<li>
								<PropertyCard property={property} key={index} />
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default PropertiesList
