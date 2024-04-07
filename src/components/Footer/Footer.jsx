import './Footer.css'

export function Footer({ filters }) {
  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}

      {/* <h4>Shopping Cart with useContext & useReducer</h4> */}
    </footer>
  )
}
