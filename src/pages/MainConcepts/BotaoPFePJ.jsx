import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Componente = () => {

  const [mostrar, setMostrar] = useState(true);


  const MostrarCPF = () => {
      setMostrar(false)
  }

  const MostrarCNPJ = () => {
      setMostrar(true)
  }
  
  const InputPF = () => {
      return <input placeholder="Digite o seu CPF"></input>
  }
    
  const InputPJ = () => {
      return <input placeholder="Digite o seu CNPJ"></input>
  }
 
  const MostrarInput = (props) => {
      const mostrar = props.mostrar;
      if(mostrar) {
          return <InputPJ/>
      }
      else {
          return <InputPF/>
      }
  }

  const BotaoPF = () => {
    return <Button variant="success" onClick={MostrarCPF}>Pessoa Física</Button>;
  };
  const BotaoPJ = () => {
    return <Button onClick={MostrarCNPJ} variant="secondary">Pessoa jurídica</Button>;
  };

  return (
    <div>
      <hr></hr>
      <ButtonGroup>
        <BotaoPF  />
        <BotaoPJ  />
      </ButtonGroup>
      <br></br>
      <MostrarInput mostrar={mostrar}/>
    </div>
  );
};

export default Componente;
