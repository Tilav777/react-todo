import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState('')
  
  const SetTodo = (e)=> {
    e.preventDefault()
    const todoWrap = document.querySelector('.todo-wrap')
    todoWrap.innerHTML += `<li>${todos}</li>`
  }
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <form onSubmit={SetTodo}>
        <input type="text" value={todos} onChange={(e) => setTodos(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      <ul className='todo-wrap'>
        
      </ul>
    </div>
  );
}

export default App;
