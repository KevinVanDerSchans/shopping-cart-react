import { products } from '../../mocks/products.json'
import { Products } from '../Products/Products'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Shopping cart</h1>
        <Products products={products}/>

      </div>
    </>
  )
}

export default App
