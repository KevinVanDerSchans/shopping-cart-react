import { useId } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartIcon, ClearCartIcon } from '../Icons/Icons'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='' alt='Iphone' />

            <div>
              <strong>iPhone - 1500€</strong>
            </div>

            <footer>
              <small>Qty: 1</small>

              <button style={{ color: '#fff' }}>+</button>
            </footer>
          </li>
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
