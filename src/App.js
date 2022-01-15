import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    filterHandler();
    console.log('useEffect');
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Inna's Todo List</h1>
      </header>
      <div>
        <Form 
          inputText={inputText} 
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos} 
          status={status}
          setStatus={setStatus}
        />
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
