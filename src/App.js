import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Inna's Todo List</h1>
      </header>
      <div>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <h2>{inputText}</h2>

      </div>
    </div>
  );
}

export default App;
