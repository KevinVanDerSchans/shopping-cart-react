import { useFilters } from '../../hooks/useFilters'
import { Header } from '../Header/Header'
import { products as initialProducts } from '../../mocks/products.json'
import { Products } from '../Products/Products'
import { Footer } from '../Footer/Footer'
import { IS_DEVELOPMENT } from '../../config'
import { Cart } from '../Cart/Cart'
import { CartProvider } from '../../context/cart'
import './App.css'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
