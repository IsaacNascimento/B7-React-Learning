import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const TrainingState = () => {

    const [show, setShow] = useState(false);

    const HandleClickPJ = () => {
      setShow(true)
    }

    const HandleClickPF = () => {
      setShow(false)
    }

    const PessoaJurica = () => {
        return <input placeholder='Digite seu CNPJ'></input>
    }

    const PessoaFisica = () => {
        return <input placeholder='Digite seu CPF'></input>
    }

    const ShowInput = (props) => {
      const show = props.show;
       if(show) {
         return <PessoaJurica/>
       } 
         return <PessoaFisica/> 
    }

    const BtnPJ = () => {
      return (
      <Button variant="success" onClick={HandleClickPJ}>
           Pessoa Jurídica
      </Button>
      )
    }

    const BtnPF = () => {
      return (
      <Button variant="secondary" onClick={HandleClickPF}>
           Pessoa Física
      </Button>
      )
    }

  return (
    <div>
        <hr></hr>
        <br></br>
        <ButtonGroup size="lg" className="mb-2">
        <BtnPJ/><BtnPF/>
        </ButtonGroup>
        <br></br>
        <ShowInput show={show}/>
        
    </div>
  )
}

export default TrainingState