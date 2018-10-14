import React, { Component } from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { connect } from 'react-redux'
import * as actions from '../actions'

const App = ({ loadTodos }) => {
  loadTodos();
  return (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  )
}
export default connect(null,actions)(App);
