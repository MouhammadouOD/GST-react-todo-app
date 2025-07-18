export const addTask = (description) => ({
  type: 'ADD_TASK',
  payload: {
    id: Date.now(),
    description,
    isDone: false
  }
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: id
});

export const editTask = (id, newDescription) => ({
  type: 'EDIT_TASK',
  payload: { id, newDescription }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter
});