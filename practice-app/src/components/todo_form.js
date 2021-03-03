import React, { useState } from 'react';
import { addToDo, editToDo } from '../actions/list_actions';
import { useDispatch } from 'react-redux';

const ToDoForm = ({idx, hide, val}) => {
  
  const [task, updateTask] = useState(val || "");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (task.length === 0 || task.length === 26) {
      return
    }
    
    if (idx){
      dispatch(editToDo({idx, task}))
    }
    else {
      dispatch(addToDo(task))
    }
    hide();
    updateTask("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => updateTask(e.target.value)} value={task}/>
      <input type="submit" value="Save"/>
    </form>
  )
}

export default ToDoForm;
