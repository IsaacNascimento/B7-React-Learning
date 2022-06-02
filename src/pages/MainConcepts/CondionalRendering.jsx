import React, { useState } from 'react'
import LogoutButton from '../../components/LogoutButton';
import LoginButton from '../../components/LoginButton';


const CondionalRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const Show = () => {
        setIsLoggedIn(!isLoggedIn)
        console.log(isLoggedIn)
    }

    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={Show}/>
    }
    else {
      button = <LoginButton onClick={Show}/>
    }
    
    function UserGreeting() {
      return <input placeholder='CPF'></input>;
    }
    
    function GuestGreeting() {
      return <input placeholder='CNPJ'></input>;
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting /> 
      } 
      return <GuestGreeting />;
    }

  return (
    <div>
        <hr></hr>
        {button}
        <br></br>
        <br></br>
        <Greeting isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default CondionalRendering;
