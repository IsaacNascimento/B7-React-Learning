import React, { useState } from 'react'

const InputState = () => {

    const [name, setName] = useState('');
    const HandleInput = (event) => {
          setName(event.target.value)
    } 

  return (
    <div>
      <input
       type="text"
       placeholder='Digite algo' 
       value={name}
       onChange={HandleInput}
       />
      <h5>Seu nome é: {name}</h5>
    </div>
  )
}

export default InputState;