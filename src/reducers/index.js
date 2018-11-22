import todos from './todos'
import visibilityFilter from './visibilityFilter'


export default function (state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibiltyFilter, action)
  }
}