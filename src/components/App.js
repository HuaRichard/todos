import React, { createContext, useReducer } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import rootReducer from '../reducers'

const Store = createContext();

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, []);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <AddTodo />
      {/* <VisibleTodoList />
      <Footer /> */}
    </ Store.Provider>
  )
}

export default App
export { Store }
