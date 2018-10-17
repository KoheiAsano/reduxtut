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
const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

const handleChangeFile = (e) => {
    let files = e.target.files;
    let image_url = createObjectURL(files[0]);
    // return image_url;
}


        // <div>
        //
        //     <img src={this.state.image_src} />
        //     <button onClick={this.clickPostBtn} type="button">投稿する</button>
        // </div>
const Todo = ({ onClick, completed, text, img}) => {
  let iconSrc = '/alok.jpg'
  return(
    <MuiThemeProvider theme={theme}>
      <ListItem key={text} dense button >
        <div>
          <img alt={'NO IMG'} src={img} style={{width: 50,height:50,}}/>
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
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
