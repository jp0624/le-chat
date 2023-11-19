import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RootlayoutPage from './pages/RootlayoutPage'
import FindYourHomePage from './pages/FindYourHomePage'
import MortgageCalculator from './pages/MortgageCalculatorPage'
import NewListings from './pages/NewListingsPage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootlayoutPage />}>
			<Route index element={<HomePage />} />
			<Route path='/About' element={<AboutPage />} />
			<Route path='/Find_Your_Home' element={<FindYourHomePage />} />
			<Route path='/Mortgage_Calculator' element={<MortgageCalculator />} />
			<Route path='/New_Listings' element={<NewListings />} />
		</Route>
	)
)
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
