import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeToDo } from '../actions/list_actions';
import ToDoForm from './todo_form';

const ToDoListItem = ({item}) => {
  const dispatch = useDispatch();
  const [editForm, toggleForm] = useState(false);

  return (
    <li className="todo-item">
      {!editForm ? (
        <>
          <p>{item.task}</p>
          <div className="list-buttons">
            <i className="fas fa-pencil-alt" onClick={() => toggleForm(true)}></i>
            <i className="fas fa-trash" onClick={() => dispatch(removeToDo(item.idx))}></i>
          </div> 
        </>) : <ToDoForm idx={item.idx} val={item.task} hide={()=>toggleForm(false)}/>
      }
    </li>
  )
}

export default ToDoListItem;