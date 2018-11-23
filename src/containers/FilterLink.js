import { setVisibilityFilter } from '../actions'
import React, { useContext } from 'react'
import { Store } from '../components/App'

const FilterLink = ({ filter, children }) => {
  const { state, dispatch } = useContext(Store);
  return (
    <button
      onClick={() => dispatch(setVisibilityFilter(filter))}
      disabled={filter === state.visibilityFilter}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  )
}

export default FilterLink;