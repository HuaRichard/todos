import { setVisibilityFilter } from '../actions'
import React, { useContext } from 'react'
import { Store } from '../components/App'
import Link from '../components/Link'

const FilterLink = ({ filter, children }) => {
  const { state, dispatch } = useContext(Store);
  return (
    <Link
      onClick={() => dispatch(setVisibilityFilter(filter))}
      active={filter === state.visibilityFilter}
      children={children}
    />
  )
}

export default FilterLink;