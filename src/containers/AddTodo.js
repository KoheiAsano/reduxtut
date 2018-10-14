import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Button from '@material-ui/core/Button'

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
        <input ref={node => input = node} />
        <Button type="submit"
                style={{
                  color: 'white',
                  backgroundColor: 'lightGreen',
                  marginLeft: '1px',
                  width:"120px",
                  height:"2px",
                }}
        >
          Add Todo
        </Button>
      </form>
    </div>
  )
}
export default connect(null,actions)(AddTodo)
