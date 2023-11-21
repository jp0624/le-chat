export type string_number_obj = { [key: string | number]: string | number }

export type Summary_Interface = {
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
export type Building_Interface = {
	bedrooms: string_number_obj
	bathrooms: string_number_obj
	interior_features: string_number_obj
	building_features: string_number_obj
	heating_cooling: string_number_obj
	exterior_features: string_number_obj
	neighbourhood_features: string_number_obj
	parking: string_number_obj
}
export type Property_Interface = {
	images?: string[]
	headline: string
	sold_by_title?: string
	sold_by?: string
	address?: string
	city?: string
	province?: string
	postal_code?: string
	price_title?: string
	price?: number
	move_in_date?: string
	description?: string
	summary?: Summary_Interface
	building?: Building_Interface
}
