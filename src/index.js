import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App'


import { createStore, applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";


import Button from '@material-ui/core/Button'
import { StyleSheet, css } from 'aphrodite';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

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
  zippyHeader: {
    'margin-top': '50px',
    ':hover': {
        backgroundColor: 'red'
    },
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: '3s, 1200ms',
    animationIterationCount: 'infinite',
  },
});

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <Button className={css(styles.zippyHeader)}
    onClick={() => console.log(store.getState())}
    >
    Redux Store tree
    </Button>
  </div>,
   document.getElementById('root')
);
