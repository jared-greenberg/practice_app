export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


export const addToDo = task => ({
  type: ADD_TODO,
  task
})

export const removeToDo = idx => ({
  type: REMOVE_TODO,
  idx
})

export const editToDo = payload => ({
  type: EDIT_TODO,
  payload
})
