import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const EffectPratica = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');


    useEffect(() => {
        setFullName(`${name} ${lastName}`)
    }, [name, lastName]);

    const handleNameChange = (event) => {
       setName(event.target.value);
    };
    
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        
    };
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };

  return (
    <div>
       <input type="text" placeholder='Type your name' value={name}  onChange={handleNameChange}></input>
       <br/>
       <input type="text" placeholder='Type your Last name' value={lastName} onChange={handleLastNameChange} ></input>
       <br/>
       <input type="text" placeholder='Type your Full name' value={fullName} onChange={handleFullNameChange}></input>
       <br/>
       <p><b>Full name:</b> {fullName}</p>
    </div>
  ) 
}

export default EffectPratica;