import React from 'react';
import { useDispatch } from 'react-redux';

const ToDoListItem = ({item}) => {
  return (
    <li>
      {item}
    </li>
  )
}

export default ToDoListItem;