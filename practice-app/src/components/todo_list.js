import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../actions/list_actions';
import ToDoListItem from './todo_list_item';
import './todo.css';


const ToDoList = () => {

  const dispatch = useDispatch();
  const listItems = useSelector((state) => Object.values(state.list))

  const [formOpen, toggleForm] = useState(false)
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = e => {
    setNewToDo("");
    e.preventDefault();
    dispatch(addToDo(newToDo))
  }

  const updateToDo = val => {
    setNewToDo(val);
  }

  return (
    <main>
      <h1>My To-Do List</h1>
      <button id="logout-button">Logout</button>

      <section className="top-list">
        <div className="search-bar">
          <input type="text" placeholder="search"/>
          <i className="fas fa-search"></i>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => updateToDo(e.target.value)} value={newToDo}/>
          <input type="submit" value="Save"/>
      </form>
      <ul>
        {listItems.map(item => <ToDoListItem key={item} item={item}/>)}
      </ul>
    </main>
  )

}

export default ToDoList
