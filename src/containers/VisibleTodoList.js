import { connect } from 'react-redux'
import * as actions from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  if (state.firebase.data.todos){
    let todos = []
    Object.keys(state.firebase.data.todos).forEach(key =>{
      let todo = state.firebase.data.todos[key];
      todos.push({
        key: key,
        text: todo.text,
        completed: todo.completed,
      })
    });
    return(
      {
        todos: getVisibleTodos(todos, state.visibilityFilter)
      }
    )
  }
}
// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

export default compose(
  firebaseConnect([
    'todos'
  ]),
  connect(mapStateToProps,actions)
)(TodoList)
