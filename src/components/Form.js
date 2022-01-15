import React, {useState} from 'react'

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    
    const inputTextHandler = event => {
        setInputText(event.target.value);
    }

    const submitTodoHandler = event => {
        event.preventDefault();
        console.log(event);
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()}])
        setInputText("");
    }

    const statusHandler = event => {
        console.log("statusHandler event: ", event.target.value, event);
        setStatus(event.target.value);
    }

    return (
        <form onSubmit={submitTodoHandler}>
            <input onChange={inputTextHandler} 
                value={inputText}
                type="text" className="todo-input"
            />
            <button type="submit" className="todo-button">
                <i class="fas fa-plus-square"></i>
            </button>
            <div className="todo-select">
                <select onChange={statusHandler} name="todos" id="" className="select-todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
