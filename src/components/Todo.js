import React from 'react'

function Todo({task, deleteTodo, editTodo}) {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <button onClick={() => deleteTodo(task.id)}>X</button>
        <button onClick={() => editTodo(task.id)}>Edit</button>
      </div>
    </div>
  )
}

export default Todo