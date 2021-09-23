import React from 'react';
import Header from './Header.js'
import List from './List.js';
import Todo from './Todo.js';

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
      <List input={input} handleChange={handleChange} addTodo={addTodo} />
      <Todo todos={todos} makeDone={makeDone} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App