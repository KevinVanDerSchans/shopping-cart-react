/* eslint-disable react/prop-types */
import { Filters } from "../Filters/Filters"

export function Header ({ changeFilters }) {
  return (
    <header>
      <h1>Shopping ReactCart</h1>

      <Filters onChange={changeFilters} />
    </header>
  )
}
