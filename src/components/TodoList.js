import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos }) => {
    return (
        <div className='todo-list'>
            {
                todos && todos.map((todo, key) => { return <Todo key={key} todo={todo} /> })
            }
        </div>
    )
}

export default TodoList