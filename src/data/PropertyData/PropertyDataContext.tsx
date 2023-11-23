// PropertyDataContext.tsx
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react'

interface PropertyDataContextProps {
	PropertyData: any // Adjust the type based on your JSON structure
	setPropertyData: (data: any) => void // Adjust the type based on your JSON structure
}

const PropertyDataContext = createContext<PropertyDataContextProps | undefined>(
	undefined
)

export const PropertyDataProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [PropertyData, setPropertyData] = useState<any | null>(null)

	const setPropertyDataHandler = (data: any) => {
		setPropertyData(data)
	}

	useEffect(() => {
		// Check local storage on initial load
		const localPropertyFavorites = JSON.parse(
			localStorage.getItem('PropertyFavorites') || '[]'
		)

		if (PropertyData && PropertyData.properties) {
			const propertyIdsInState = PropertyData.properties.map(
				(property: any) => property.id
			)
			console.log('propertyIdsInState: ', propertyIdsInState)
			const newIdsToAdd = localPropertyFavorites.filter(
				(id: string) => !propertyIdsInState.includes(id)
			)
			console.log('newIdsToAdd: ', newIdsToAdd)

			if (newIdsToAdd.length > 0) {
				const newData = {
					...PropertyData,
					properties: [
						...PropertyData.properties,
						...newIdsToAdd.map((id) => ({
							id /* other properties as needed */,
						})),
					],
				}
				console.log('newData: ', newData)
				// Check if the data is different before updating
				if (JSON.stringify(newData) !== JSON.stringify(PropertyData)) {
					setPropertyDataHandler(newData)
					localStorage.setItem('PropertyFavorites', JSON.stringify(newData))
				}
			}
		}
	}, [PropertyData])

	return (
		<PropertyDataContext.Provider
			value={{ PropertyData, setPropertyData: setPropertyDataHandler }}
		>
			{children}
		</PropertyDataContext.Provider>
	)
}

export const usePropertyData = (): PropertyDataContextProps => {
	const context = useContext(PropertyDataContext)

	if (!context) {
		throw new Error(
			'usePropertyData must be used within a PropertyDataProvider'
		)
	}
	return context
}
