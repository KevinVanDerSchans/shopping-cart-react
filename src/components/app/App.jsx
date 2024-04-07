import { useState } from 'react'
import { Header } from '../Header/Header'
import { products as initialProducts } from '../../mocks/products.json'
import { Products } from '../Products/Products'
import './App.css'

function App() {
  const [products] = useState(initialProducts)
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

  const filteredProducts = filterProducts(products)

  return (
    <>
      <div>
        <Header />

        <Products products={filteredProducts}/>
      </div>
    </>
  )
}

export default App
