import React, { useState } from 'react';
import { addToDo, editToDo } from '../actions/list_actions';
import { useDispatch } from 'react-redux';

const ToDoForm = ({idx, hide, val}) => {
  
  const [task, setTask] = useState(val || "");
  const [validTask, updateValidity] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (idx){
      dispatch(editToDo({idx, task}))
    }
    else {
      dispatch(addToDo(task))
    }
    hide();
    updateTask("");
  }

  const updateTask = tsk => {
    if (tsk.length === 26) {
      return;
    }
    else if (tsk.length === 1){
      updateValidity(true);
    }
    else if (tsk.length === 0) {
      updateValidity(false);
    }

    setTask(tsk);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => updateTask(e.target.value)} value={task}/>
      <input type="submit" disabled={!validTask} value="Save"/>
    </form>
  )
}

export default ToDoForm;
