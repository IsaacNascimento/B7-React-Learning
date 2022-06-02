import React from 'react'

// Props are know as properties it can be used to pass data from one 
// component to another

const Hello = (props) => {
    return (<h1> Hello {props.name}, your age is {props.age} </h1>)
}

const Props = () => {
  return (
    <div>
       <hr></hr>
        <Hello name="Isaac" age="20"/>
        <Hello name="John" age="21"/>
       <hr></hr>
    </div>
  )
}

export default Props;

