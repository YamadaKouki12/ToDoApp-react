import React from 'react';

const Form = ({input, handleChange, addTodo}) => {
	return(
		<div>
			<input type="text" value={input} onChange={handleChange} placeholder='タスクを入力してください'/>
      		<button onClick={addTodo}>Add</button>
		</div>
	)
}

export default Form;