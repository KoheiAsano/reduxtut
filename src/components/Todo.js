import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

// const Todo = ({ onClick, completed, text, img, Edit}) => {
class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state={Edit: false}
  }
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <ListItem key={this.props.text} dense button >
          <div>
            <img alt={'NO IMG'} src={this.props.img} style={{width: 50,height:50,}}/>
          </div>
          <ListItemText primary={this.props.text} />
          <Button onClick={console.log(this.state.Edit)}>Test</Button>
          <Button onClick={() => this.setState({Edit: !this.state.Edit})}>Test</Button>
          <ListItemSecondaryAction >
            <Checkbox
              onChange={this.props.onClick}
              checked={this.props.completed}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </MuiThemeProvider>
    )
  }
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
