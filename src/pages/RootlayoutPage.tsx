import { Outlet } from 'react-router-dom'
import Header from '../components/layout/header/Header'
import Footer from '../components/layout/footer/Footer'

function RootlayoutPage() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default RootlayoutPage
