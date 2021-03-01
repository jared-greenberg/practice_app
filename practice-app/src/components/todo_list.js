import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../actions/list_actions';
import './todo.css';


const ToDoList = () => {

  const dispatch = useDispatch();

  const [formOpen, toggleForm] = useState(false)
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addToDo(newToDo))
    setNewToDo("");
  }

  const updateToDo = val => {
    console.log(val)
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
          <input type="text" onChange={(e) => updateToDo(e.target.value)}/>
          <input type="submit" value="Save"/>
      </form>
      <ul>
        {}
      </ul>
    </main>
  )

}

export default ToDoList
