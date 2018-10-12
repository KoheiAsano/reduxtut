import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <button onClick={() => console.log(store.getState())}
            className="test"
    >
    Current Store tree
    </button>
  </div>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
