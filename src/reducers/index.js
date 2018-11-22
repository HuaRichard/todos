// import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })

export default function combineReducers(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibiltyFilter, action)
  }
}