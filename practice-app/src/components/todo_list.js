import React, { useEffect, useState } from 'react';
import './todo.css';

const ToDoList = () => {

  const [formOpen, toggleForm] = useState(false)

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
      <form>
          <input type="text"/>
          <input type="submit" value="Save"/>
      </form>
      <ul>
        {}
      </ul>
    </main>
  )

}

export default ToDoList
