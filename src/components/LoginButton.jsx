import React from 'react'
import {Button, Nav } from 'react-bootstrap';

const LoginButton = (props) => {
  return (
   
        <Button onClick={props.onClick} variant="success">
            Pessoa Física
        
        </Button>
  
  )
}

export default LoginButton;