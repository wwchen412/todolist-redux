import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Button = styled.button`
  width: calc(100% / 3);
  margin:0;
  border:0;
  background:#f2f4f6;
  cursor: pointer;
  font-size:1rem;
  padding:1rem 0;
  &.active{
    background:#fff;
    color:rgb(255, 100, 96);
  }
  &:hover{
    color:rgb(255, 100, 96);
  }
`

const Link = ({active, children, onClick}) => (
    <Button
    onClick={onClick}
    className={active ?'active':'' }
    disabled={active}
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

