// PropertyDataFetcher.tsx
import { useEffect } from 'react'
import { usePropertyData } from './PropertyDataContext'

const PropertyDataFetcher = ({ url }) => {
	const { PropertyData, setPropertyData } = usePropertyData()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url)

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const data = await response.json()

				if (JSON.stringify(data) !== JSON.stringify(PropertyData)) {
					setPropertyData(data)
				}
			} catch (error) {
				console.error('Error fetching JSON data:', error)
			}
		}

		fetchData()
	}, [url, PropertyData, setPropertyData])

	return null
}

export default PropertyDataFetcher
