import React, { useState } from 'react';

function TodoForm({addTodo}) {
  //Each task
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    //setNewTask được update khi nhập chuỗi vào input
    setValue(e.target.value);};
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value){
      addTodo(value);
      setValue("");
    }
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type='text'
        value={value}
        placeholder='Add a todo'
        className='todo-input'
        onChange={handleChange}
      />
      <button>Add Task</button>
    </form>
  )
}

export default TodoForm