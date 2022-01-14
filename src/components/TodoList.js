import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list"> {todos.map(x => <Todo text={x.text}/>)}
            </ul>
        </div>
    )
}

export default TodoList
