import React, { useState, } from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr'
import { useTodoLayerValue } from '../context/TodoContext'

const Todo = ({ todo }) => {




    const [{ }, dispatch] = useTodoLayerValue();
    const [editable, setEditable] = useState(false);
    const [editInput, setEditInput] = useState(todo.todo_name);
    const handleDelete = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }
    const handleComplete = (id) => {
        dispatch({
            type: "COMPLETE_TODO",
            payload: id
        })
    }
    const handleEdit = (id, todo_name) => {
        dispatch({
            type: "UPDATE_TODO",
            payload: {
                id,
                todo_name
            }
        })
        setEditInput('');
        setEditable(false);
    }
    return (
        <div className='todo-row'>
            <div className={todo.isCompleted ? "completed" : "not-completed"}>
                {
                    editable ? <input type="text" value={editInput} onChange={(event) => { setEditInput(event.target.value) }} /> : todo.todo_name
                }
            </div>
            <div>
                {
                    editable ? null : <GrFormCheckmark className='todo-icon' onClick={() => handleComplete(todo.id)} />
                }

                <GrFormClose className='todo-icon' onClick={() => handleDelete(todo.id)} />
                {
                    editable ? <GrFormCheckmark className='todo-icon' onClick={() => handleEdit(todo.id, editInput)} /> :
                        <GrFormEdit className='todo-icon' onClick={() => setEditable(true)} />
                }


            </div>
        </div>
    )
}

export default Todo;