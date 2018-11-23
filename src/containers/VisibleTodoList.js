import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'
import React, { useContext } from 'react'
import { Store } from '../components/App'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const VisibleTodoList = () => {
  const { state, dispatch } = useContext(Store);
  const todos = getVisibleTodos(state.todos, state.visibilityFilter)
  return (
    <TodoList
      todos={todos}
      toggleTodo={(id) => dispatch(toggleTodo(id))}
    />
  )
}

export default VisibleTodoList;

