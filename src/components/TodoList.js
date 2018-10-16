import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, firebase }) => {

  const toggleTodo = (key,completed) => firebase.update(`todos/${key}`, {completed: !completed})
  const deleteTodo = (key) => firebase.remove(`todos/${key}`)
  if(todos){
    return(
      <List>
        {todos.map((todo,id) =>
          <div key={id + 1}>
            <Todo
              key={id + 1}
              {...todo}
              onClick={() => toggleTodo(todo.key, todo.completed)}
            />
            <IconButton key={id + 1}
              style={{marginLeft:10, fontSize:8, color:'red'}}
              onClick={() => deleteTodo(todo.key)}>
              <DeleteIcon />
            </IconButton>
          </div>
        )}
      </List>
    )
  }else{return(null)}
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
}

export default TodoList
