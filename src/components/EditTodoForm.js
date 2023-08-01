import React, { useState } from 'react';

function EditTodoForm({editTodo, task }) {
  //Each task
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    //setNewTask được update khi nhập chuỗi vào input
    setValue(e.target.value);};

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type='text'
        value={value}
        placeholder='Update Task'
        className='todo-input'
        onChange={handleChange}
      />
      <button>Update Task</button>
    </form>
  )
}

export default EditTodoForm