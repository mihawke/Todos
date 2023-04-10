import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, deleteTodo,toggleTodo }) => {
    return (
        <div>
            <ul className='list'>
                {todos.length === 0 && 'No Todos'}
                {todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            title={todo.title}
                            deleteTodo={deleteTodo}
                            toggleTodo={toggleTodo}
                        />)
                })}
            </ul>
        </div>
    )
}

export default TodoList