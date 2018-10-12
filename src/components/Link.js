import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'


const Link = ({ active, children, onClick}) => (
  <Button
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
