import * as React from 'react';
// import Button from '@mui/material/Button';

const App = () => {
  const [input,setInput] = React.useState('');
  const [todos,setTodos] = React.useState(['a','b','c'])
  const [dones, setDones] = React.useState(['d','e']);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const addTodo = () => {
    setTodos([...todos,input]);
    setInput('');
  }

  const makeDone = (key) => {
    setDones([...dones,todos[key]])
    setTodos(todos.filter((todo,index) => (index!==key)));
  }

  return(
    <div>
      <h2>TODOアプリ</h2>
      <input type="text" value={input} onChange={handleChange} placeholder='タスクを入力してください'/>
      <button onClick={addTodo}>Add</button>
      <h3>することリスト</h3>
      <ol>  
        {todos.map((todo,index) => (
          <li key={index}>{todo} <button onClick={() => makeDone(index)}>Done</button> </li>
        ))}
      </ol>
      <h3>終わったことリスト</h3>
      <ol>  
        {dones.map((done,index) => (
          <li key={index}>{done}</li>
        ))}
      </ol>
    </div>
  )
}

export default App