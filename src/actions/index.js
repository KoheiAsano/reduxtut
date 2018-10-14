import { firebaseDB } from '../firebase'
const Todoref = firebaseDB.ref('todos');

const loadTodosSuccess = snapshot => {
  return {
    type: 'TODOS_RECEIVE_DATA',
    data: snapshot.val()
  }
}

const loadTodosError = error => {
  return {
    type: 'TODOS_RECEIVE_ERROR',
    message: error.message
  }
}


export const loadTodos = () => dispatch => {
  Todoref.ofF()
  Todoref.on('value',
    (snapshot) => {dispatch(loadTodosSuccess(snapshot))},
    (error) => {dispatch(loadTodosError(error))}
  )
}



export const addTodo = text => dispatch => {
  Todoref.push({
    text: text,
    completed:false,
  })
  .catch(error => dispatch({
    type: 'ADD_TASK_ERROR',
    message: error.message,
  }))
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = key => (dispatch,getState) => {
  let state = getState()
  let todo = state.todos.filter(todo => todo.key ===key)

  firebaseDB.ref(`todos/${key}`).update({completed: !todo[0].completed})
  .catch(error => dispatch({
    type: 'UPDATE_TASK_ERROR',
    message: error.message,
  }));
}

export const deleteTodo = key => dispatch => {
  firebaseDB.ref(`todos/${key}`).remove()
    .catch(error => dispatch({
      type: 'DELETE_TASK_ERROR',
      message: error.message,
    }));
}

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
