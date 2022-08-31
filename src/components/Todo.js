import React from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr'
import { useTodoLayerValue } from '../context/TodoContext'

const Todo = ({ todo }) => {
    const [{ }, dispatch] = useTodoLayerValue();
    const handleDelete = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }
    const handleEdit = (edit) => {
        alert(edit)
    }
    return (
        <div className='todo-row'>
            <div>{todo.todo_name}</div>
            <div>
                <GrFormClose className='todo-icon' onClick={() => handleDelete(todo.id)} />
                <GrFormEdit className='todo-icon' onClick={handleEdit} />
            </div>
        </div>
    )
}

export default Todo;