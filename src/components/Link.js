import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { css, withStyles } from './withStyles';


const Link = ({ active, children, onClick, styles}) => {
  let deadalive = active ? styles.deactive:styles.active
  return(
    <Button
      onClick={onClick}
      disabled={active}
      {...css(deadalive)}
    >
    {children}
    </Button>
  )
}
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default withStyles(({ backgroundColor }) => ({
  deactive: {
    color: 'black',
    backgroundColor: backgroundColor.disable,
    width:"100px",
    height:"10px",
  },
  active: {
    color: 'white',
    backgroundColor: backgroundColor.able,
    marginLeft: '1px',
    width:"100px",
    height:"10px",
    ':hover': {
        backgroundColor: 'red'
    },
  },
}))(Link)
