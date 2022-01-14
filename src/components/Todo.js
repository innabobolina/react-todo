import React from 'react'

const Todo = ({text, todos, setTodos, x}) => {
    const completeHandler = (event) => {
        setTodos(todos.map(item => {
            if (item.id === x.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== x.id));
        console.log('x: ', x)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${x.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
