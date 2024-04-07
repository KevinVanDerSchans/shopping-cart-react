import { useState } from 'react'
import { Header } from '../Header/Header'
import { products as initialProducts } from '../../mocks/products.json'
import { Products } from '../Products/Products'
import './App.css'

function useFilters () {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const [ filterProducts, setFilters ] = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <div>
        <Header changeFilters={setFilters} />

        <Products products={filteredProducts}/>
      </div>
    </>
  )
}

export default App
