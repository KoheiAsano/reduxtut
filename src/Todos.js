import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const Todos = ({ todos, firebase }) => {
  // Build Todos list if todos exist and are loaded
  return (
    <div>
      <h1>Todos</h1>
      <ul>
      </ul>
      <button onClick={console.log(todos)}>
        Add
      </button>
    </div>
  )
}

export default compose(
  firebaseConnect([
    'todos' // { path: '/todos' } // object notation
  ]),
  connect((state) => ({
    todos: state.firebase.data.todos,
    // profile: state.firebase.profile // load profile
  }))
)(Todos)
