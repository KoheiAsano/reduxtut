import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const Todo = ({ onClick, completed, text}) => (
  <MuiThemeProvider theme={theme}>
    <ListItem key={text} dense button >
    <div>
      <img src={'/alok.jpg'} style={{width: 50,height:50,}}/>
      <input type="file" accept="image" name="icon" onChange={() => console.log()}/>
    </div>
      <ListItemText primary={text} />
      <ListItemSecondaryAction >
        <Checkbox
          onChange={onClick}
          checked={completed}
        />
      </ListItemSecondaryAction>
    </ListItem>
  </MuiThemeProvider>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
