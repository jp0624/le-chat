import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/global.scss'
import { Provider } from 'react-redux'
import { store } from './state/store.tsx'
import { PropertyDataProvider } from './data/PropertyData/PropertyDataContext.tsx'
import PropertyDataFetcher from './data/PropertyData/PropertyDataFetcher.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<PropertyDataProvider>
		<Provider store={store}>
			<PropertyDataFetcher url={`./data/properties.json`} />
			<App />
		</Provider>
	</PropertyDataProvider>
	// </React.StrictMode>
)
