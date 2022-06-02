
import React from 'react'
import { Button } from 'react-bootstrap';

const LogoutButton = (props) => {
  return (

        <Button onClick={props.onClick} variant="danger">
           Pessoa jurídica
        </Button>
    
  )
}

export default LogoutButton;