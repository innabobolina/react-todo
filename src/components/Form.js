import React from 'react'

const Form = () => {
    return (
        <form>
            <input type="text" className="todo-input"/>
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
