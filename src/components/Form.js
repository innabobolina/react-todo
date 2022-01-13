import React, {useState} from 'react'

const Form = ({inputText, setInputText, todos, setTodos}) => {
    
    const inputTextHandler = event => {
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    const submitTodoHandler = event => {
        event.preventDefault();
        console.log(event);
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()}])
        setInputText("");
    }

    return (
        <form onSubmit={submitTodoHandler}>
            <input onChange={inputTextHandler} 
            value={inputText}
                type="text" className="todo-input"/>
            <button type="submit" className="todo-button">
                <i class="fas fa-plus-square"></i>
            </button>
            <div className="todo-select">
                <select name="todos" id="" className="select-todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
