import React, { useState } from 'react';

const coisas = ['Samsung', 'Iphone', 'Xiaomi', 'LG', 'Sony', 'Luana', 'ThinkCentre', 'Lenovo', 'Hp', 'Intel', 'Homiranha', 'Motorola']

const FuncState = () => {

    const [change, setChange] = useState(0);

    const arrayPecorre = (change + 1) % coisas.length;

    const troca = () => {
        setChange(arrayPecorre);
    }

    const Quantify = (props) => {
        const cellQuantify = props.cellQuantify;
        return (
          <div>
             {cellQuantify.length > 0 &&
               <h2>
                 You have {cellQuantify.length} cell phones.
               </h2>
             }
          </div>
        )
    }
 
  return (
    <div>
      <hr></hr>
        <h1>Cell phone: {change + 1} - {coisas[change]}</h1>
        <button onClick={troca}>
            Change
        </button>
        <Quantify cellQuantify={coisas}/>
    </div>
  )
}

export default FuncState;
