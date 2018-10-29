import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

let Edit = false;

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <List>
    {todos.map((todo,id) =>
      <div key={id + 1}>
        <Todo
          key={id + 1}
          {...todo}
          onClick={() => toggleTodo(todo.key)}
          Edit={Edit}
        />
        <div key={id + 1}
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
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
