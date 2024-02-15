import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'


export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };

        setTodos([newTodo, ...todos])
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(item => item.id === id ? { ...todo, completed: !item.completed } : item))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }



    return (

        <div className='todoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo}
                        toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)))}
        </div>
    )
}
