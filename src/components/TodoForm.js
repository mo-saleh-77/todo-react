import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value, description);
          // clear form after submission
          setValue('');
          setDescription('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="todo-input" placeholder='Description about the task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
