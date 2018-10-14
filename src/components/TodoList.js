import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List from '@material-ui/core/List';


const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <List>
    {todos.map(todo =>
      <div>
        <Todo
          key={todo.key}
          {...todo}
          onClick={() => toggleTodo(todo.key)}
        />
        <div
          style={{marginLeft:10, fontSize:8, color:'red'}}
          onClick={() => deleteTodo(todo.key)}>
          Delete
        </div>
      </div>
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
