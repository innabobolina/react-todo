import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list"> {filteredTodos.map(x => 
                <Todo 
                    key={x.id} 
                    text={x.text} 
                    x={x} 
                    todos={todos} 
                    setTodos={setTodos}
                />)}
            </ul>
        </div>
    )
}

export default TodoList
