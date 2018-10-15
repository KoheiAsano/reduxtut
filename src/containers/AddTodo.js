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
        <Button className={css(styles.zippyHeader)}
        type="submit"
        style={ {color: 'white',
                backgroundColor: 'lightGreen',
                marginLeft: '1px',}}

        >
          Add Todo
        </Button>
      </form>
    </div>
  )
}
export default connect(null,actions)(AddTodo)

const translateKeyframes = {
    '0%': {
        transform: 'translateX(0)',
    },

    '50%': {
        transform: 'translateX(100px)',
    },

    '100%': {
        transform: 'translateX(0)',
    },
};

const opacityKeyframes = {
    'from': {
        opacity: 0,
    },

    'to': {
        opacity: 1,
    }
};

const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    zippyHeader: {
        animationName: [translateKeyframes, opacityKeyframes],
        animationDuration: '3s, 1200ms',
        animationIterationCount: 'infinite',
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
