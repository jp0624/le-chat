import { configureStore } from '@reduxjs/toolkit'
import PropertyFavoritesReducer from './property_favorites/PropertyFavoritesSlice'

export const store = configureStore({
	reducer: {
		PropertyFavorites: PropertyFavoritesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
