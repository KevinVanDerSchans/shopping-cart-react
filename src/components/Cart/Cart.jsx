import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons/Icons'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()

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

              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
