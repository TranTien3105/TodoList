import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
import TodoForm from './TodoForm'
import React, { useState } from 'react';

function TodoWrapper() {
  //Create List to save task
  const [todos, setToDos] = useState([]);

  const addTodo = todo => {
    setToDos([
      ...todos, 
      {
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        task: todo,
        isEditing: false
      }]);
  }
  const deleteTodo = id => {
    setToDos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id => {
    setToDos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }
  const editTask = (task, id) => {
    setToDos(todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }
  return (
    <div className='TodoWrappper'>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo 
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      ))}
    </div>
  )
}

export default TodoWrapper