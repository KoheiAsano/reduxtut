import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { StyleSheet, css } from 'aphrodite';

const Link = ({ active, children, onClick}) => (
  <Button className={css(styles.hover)}
    onClick={onClick}
    disabled={active}
    style={active ? {color: 'black',backgroundColor: '#FF80AB',width:"100px",height:"10px",}:{
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


const styles = StyleSheet.create({
  hover: {
    ':hover': {
        backgroundColor: 'red'
    },
  },
});
