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

const mapStateToProps = state => {
  return(
    {
      todos: state.firebase.data.todos
    }
  )
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
  connect((state) => ({
    todos: state.firebase.data.todos,
  }),actions)
)(TodoList)
