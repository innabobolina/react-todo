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
        <h1>{inputText}</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
