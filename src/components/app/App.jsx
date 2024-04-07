import { useState } from 'react'
import { useFilters } from '../../hooks/useFilters'
import { Header } from '../Header/Header'
import { products as initialProducts } from '../../mocks/products.json'
import { Products } from '../Products/Products'
import { Footer } from '../Footer/Footer'
import { IS_DEVELOPMENT } from '../../config'
import './App.css'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
