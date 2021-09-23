import React from 'react';
import Header from './Header.js'
// import Button from '@mui/material/Button';

const App = () => {
  const [input,setInput] = React.useState('');
  // const [todos,setTodos] = React.useState([{task:'',isCompleted:'',}]);
  const [todos,setTodos] = React.useState([{task:'a',isCompleted:true},{task:'b',isCompleted:true},{task:'c',isCompleted:false},{task:'d',isCompleted:false}]);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const addTodo = () => {
    const newTodos = todos;
    setTodos([...newTodos,{task:input,isCompleted:false}]);
    setInput('');
  }

  const makeDone = (key) => {
    const newTodos = todos;
    newTodos[key].isCompleted = true;
    setTodos([...newTodos]);
  }

  const deleteTodo = (key) => {
    const newTodos=[...todos];
    newTodos.splice(key,1);
    setTodos(newTodos);
  }

  return(
    <div>
      <Header />
      <input type="text" value={input} onChange={handleChange} placeholder='タスクを入力してください'/>
      <button onClick={addTodo}>Add</button>
      <h3>することリスト</h3>
      <ol>  
      {todos.map((todo,index) => (
        todo.isCompleted===false && 
          (<li key={index}>
          {todo.task}
          <button onClick={() => makeDone(index)}>Done</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>)
        ))}
      </ol>
      <h3>終わったことリスト</h3>
      <ol>  
      {todos.map((todo,index) => (
        todo.isCompleted===true && 
          (<li key={index}>
          {todo.task}
          <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>)
        ))}
      </ol>
    </div>
  )
}

export default App