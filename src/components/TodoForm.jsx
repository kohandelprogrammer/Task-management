import { useState } from 'react'


export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setValue(e.target.value)
        }
    }

    const handleSubmit = () => {
        addTodo(value)
        setValue("")
    }


    return (
        <div className='todoForm' >

            <input type='text' className='todo-input'
                value={value} placeholder='What is the task today?' onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn' onClick={handleSubmit} >Add Task</button>

        </div>
    )
}
