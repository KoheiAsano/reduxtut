import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {firebaseReducer} from 'react-redux-firebase'

export default combineReducers({
  firebase: firebaseReducer,
  // todos,
  // visibilityFilter
})
