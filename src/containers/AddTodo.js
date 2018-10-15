import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Button from '@material-ui/core/Button'
import { StyleSheet, css } from 'aphrodite';


const AddTodo = ({ addTodo }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if(!input.value.trim()){
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input className={css(styles.hover)} ref={node => input = node} />
        <button className={css(styles.hover)}
        type="submit"

        >
          Add Todo
        </button>
      </form>
    </div>
  )
}
export default connect(null,actions)(AddTodo)

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    blue: {
        backgroundColor: 'blue'
    },

    hover: {
        color: 'white',
        backgroundColor: 'lightGreen',
        marginLeft: '1px',
        ':hover': {
            backgroundColor: 'red'
        }
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
