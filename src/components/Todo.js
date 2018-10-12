import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({ onClick, completed, text }) => (
  <ListItem key={text} dense button >
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <Checkbox
        onChange={onClick}
        checked={completed}
      />
    </ListItemSecondaryAction>
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRquired,
  text: PropTypes.string.isRequired
}

export default Todo
