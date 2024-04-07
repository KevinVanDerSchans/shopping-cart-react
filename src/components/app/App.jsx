import { useContext, useState } from 'react'
import { Header } from '../Header/Header'
import { products as initialProducts } from '../../mocks/products.json'
import { Products } from '../Products/Products'
import { Footer } from '../Footer/Footer'
import { IS_DEVELOPMENT } from '../../config'
import './App.css'
import { FiltersContext } from '../../context/filters'

function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0,
  // })

  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
