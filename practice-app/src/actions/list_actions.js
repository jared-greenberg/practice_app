export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const addToDo = title => ({
  type: ADD_TODO,
  title
})

export const removeToDo = id => ({
  type: REMOVE_TODO,
  id
})
