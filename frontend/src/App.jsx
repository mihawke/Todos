import { useState, useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) { return [] }
    // Why JSON.parse
    return JSON.parse(localValue)
  })
  useEffect(() => {
    // Why JSON.stringify
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: uuidv4(), title, completed: false }
      ]
    })
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return (
        currentTodos.map(todo => {
          if (todo.id == id) {
            return { ...todo, completed }
          }
          return todo
        })
      )
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <NewTodoForm onSubmit={addTodo}></NewTodoForm>
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
    </>
  )
}

export default App
