import React from 'react';
import TitleBar from './TitleBar.js';
import Dialog from './Dialog.js';
import Form from './Form.js';
import Todo from './Todo.js';

const App = () => {
  const [input,setInput] = React.useState('');
  // const [todos,setTodos] = React.useState([{task:'',isCompleted:'',}]);
  const [todos,setTodos] = React.useState([{task:'a',isCompleted:true},{task:'b',isCompleted:true},{task:'c',isCompleted:false},{task:'d',isCompleted:false}]);
  const [open, setOpen] = React.useState(false);
  
  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTodo = () => {
    setOpen(false);
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
      <TitleBar />
      <Dialog open={open} input={input} handleChange={handleChange} handleClickOpen={handleClickOpen} handleClose={handleClose} addTodo={addTodo}/>
      <Todo todos={todos} makeDone={makeDone} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App