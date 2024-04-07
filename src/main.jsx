import { FiltersProvider } from './context/filters'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
