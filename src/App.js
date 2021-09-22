import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const App = () => {
  const [input,setInput] = React.useState('');
  const [todos,setTodos] = React.useState(['a','b'])
  const [dones, setDones] = React.useState(['c','d']);

  
  return(
    <div>
      <h2>TODOアプリ</h2>
      
      <h3>することリスト</h3>
      <ol>  
        {todos.map((todo,index) => (
          <li key={index}>{todo}</li>
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