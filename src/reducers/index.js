import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import {firebaseReducer} from 'react-redux-firebase'

export default combineReducers({
  visibilityFilter,
  firebase: firebaseReducer,
})
