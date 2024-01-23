import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash,faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons'



export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
            {
                task.completed ? (
                    <FontAwesomeIcon className="complete-icon" icon={faSquareCheck} onClick={() => toggleComplete(task.id)} />
                ) : (
                    <FontAwesomeIcon className="complete-icon" icon={faSquare} onClick={() => toggleComplete(task.id)} />
                )
            }
            <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
        <div className="Todo-description">{task.description}</div>
    </div>
  )
}
