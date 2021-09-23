import React from 'react';

const Todo = ({todos, makeDone, deleteTodo}) => {
	return(
		<div>
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

export default Todo;