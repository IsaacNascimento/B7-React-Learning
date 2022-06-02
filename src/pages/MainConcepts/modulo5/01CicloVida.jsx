import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'

const CicloVida = () => {

    const [name, setName] = useState('Isaac');


    useEffect(() => {
        alert(`The ${name} got changed`)
    }, [name])

    const HandleBtn = () => {
        setName(name === "Nascimento" ? "Isaac" : "Nascimento")
    }
  
  return (
    <div>
        <h1>
        Hello {name}
        </h1>
        <Button onClick={HandleBtn}>Click</Button>
    </div>
  )
}

export default CicloVida;