import { createSlice } from '@reduxjs/toolkit'
interface PropertyFavoritesState {
	value: number[]
}

const initialState: PropertyFavoritesState = {
	value: [],
}

const PropertyFavoritesSlice = createSlice({
	name: 'PropertyFavorites',
	initialState,
	reducers: {
		toggleFavorite: (state, action) => {
			const index = state.value.indexOf(action.payload)
			if (index > -1) {
				state.value.splice(index, action.payload)
			} else {
				state.value.push(action.payload)
			}
		},
	},
})

export const { toggleFavorite } = PropertyFavoritesSlice.actions
export default PropertyFavoritesSlice.reducer
