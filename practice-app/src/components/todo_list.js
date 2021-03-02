import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ToDoListItem from './todo_list_item';
import ToDoForm from './todo_form';
import './todo.css';


const ToDoList = () => {


  const listItems = useSelector((state) => Object.values(state.list))

  const [search, updateSearch] = useState("");
  const [newForm, toggleForm] = useState(false);

  const openForm = () => {
    toggleForm(true);
    updateSearch("");
  }

  let filtered = listItems.filter(todo => todo.task.includes(search));
  
  return (
    <main>
      <h1>My To-Do List</h1>

      <button id="logout-button">Logout</button>

      <div className="list-container">
        <section className="top-list">
          <header>
            <div className="search-bar">
              <input type="text" placeholder="search" value={search} onChange={(e) => updateSearch(e.target.value)}/>
              <i className="fas fa-search"></i>
            </div>
            <button onClick={openForm}>New</button>
          </header>
          {newForm ? <ToDoForm hide={() => toggleForm(false)}/> : null}
        </section>
        <ul>
          {filtered.map(item => <ToDoListItem key={item.idx} item={item}/>)}
        </ul>
      </div>
    </main>
  )

}

export default ToDoList
