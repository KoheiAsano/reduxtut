import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { StyleSheet, css } from 'aphrodite';

const Link = ({ active, children, onClick}) => (
  <Button className={css(styles.zippyHeader)}
    onClick={onClick}
    disabled={active}
    style={{
      color: 'white',
      backgroundColor: 'lightGreen',
      marginLeft: '1px',
      width:"100px",
      height:"10px",
    }}
  >
  {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link

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
    ':hover': {
        backgroundColor: 'red'
    },
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: '3s, 1200ms',
    animationIterationCount: 'infinite',
  },
});
