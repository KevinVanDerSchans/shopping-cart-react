import { useId } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartIcon, ClearCartIcon } from '../Icons/Icons'
import './Cart.css'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />

      <div>
        <strong>
          {title} - {price}€
        </strong>
      </div>

      <footer>
        <button>Qty: {quantity}</button>

        <button onClick={addToCart} style={{ color: '#fff' }}>
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
