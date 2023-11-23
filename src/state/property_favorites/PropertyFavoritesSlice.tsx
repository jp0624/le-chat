import { createSlice } from '@reduxjs/toolkit'
interface PropertyFavoritesState {
	value: number[]
}

// Check local storage on initial load
const localPropertyFavorites = JSON.parse(
	localStorage.getItem('PropertyFavorites') || '[]'
)
const initialState: PropertyFavoritesState = {
	value: localPropertyFavorites,
}

const PropertyFavoritesSlice = createSlice({
	name: 'PropertyFavorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			console.log('state: ', state.value)
			console.log('action.payload: ', action.payload)
			const index = state.value.indexOf(action.payload)
			if (index > -1) {
				state.value.splice(index, 1)
			} else {
				state.value.push(action.payload)
			}
			localStorage.setItem('PropertyFavorites', JSON.stringify(state.value))
			console.log('state: ', state.value)
		},
	},
})

export const { toggleFavorite } = PropertyFavoritesSlice.actions
export default PropertyFavoritesSlice.reducer
