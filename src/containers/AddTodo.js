import React from 'react'

import Button from '@material-ui/core/Button'
import { StyleSheet, css } from 'aphrodite';
import TextField from '@material-ui/core/TextField';

import { withFirebase } from 'react-redux-firebase'

const AddTodo = ({ firebase }) => {
  const addTodo = (text) => firebase.push('todos/', {text: text, completed: false})
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if(!input || !input.value.trim() ){
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <TextField label={'TODO'}
           value={input}
           style={{marginRight: "10px"}} autoFocus
           onChange={(e) => input = e.target}/>
        <Button className={css(styles.hover)}
        type="submit"
        >
          Add Todo
        </Button>
      </form>
    </div>
  )
}
export default withFirebase(AddTodo)

const styles = StyleSheet.create({
    hover: {
        color: 'white',
        backgroundColor: 'lightGreen',
        marginTop: '10px',
        marginLeft: '1px',
        width:"160px",
        height:"15px",
        ':hover': {
            backgroundColor: 'green'
        }
    },
});
