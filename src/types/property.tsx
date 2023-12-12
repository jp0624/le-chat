export type string_number_obj = [string | number]

export interface Summary_Interface {
	property_type: string
	building_type: string
	storeys: number
	community_name: string
	title: string
	land_size: string
	annual_property_taxes: number
	parking_type: string
	listed_time: string
}
export interface Building_Interface {
	bedrooms: number
	bathrooms: number
	// interior_features: string_number_obj
	// building_features: string_number_obj
	// heating_cooling: string_number_obj
	// exterior_features: string_number_obj
	// neighbourhood_features: string_number_obj
	parking: number
}
export interface Property_Interface {
	property: {
		id: number
		images: string[]
		headline: string
		featured: boolean
		featured_title: string
		listing_type?: string
		listing_by_title?: string
		listing_by?: string
		address?: string
		city?: string
		province?: string
		postal_code?: string
		price_title?: string
		price: number
		move_in_date?: string
		description?: string
		summary?: Summary_Interface
		building: Building_Interface
	}
}
