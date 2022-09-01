import React, { useState, useEffect, useRef } from 'react'
import { useTodoLayerValue } from '../context/TodoContext';

export default function
    () {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const [{ todos }, dispatch] = useTodoLayerValue();
    const [todoText, setTodoTex] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoText) return;
        const newTodo = {
            id: Math.floor(Math.random() * 32131),
            todo_name: todoText,
            isCompleted: false
        };
        dispatch({
            type: "ADD_TODO",
            payload: newTodo,
        });
        setTodoTex('')
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type='text' className='todo-input' value={todoText} onChange={(event) => { setTodoTex(event.target.value) }} ref={inputRef} />
                <button className='todo-button'>
                    Add
                </button>
            </form>
        </div>
    )
}
