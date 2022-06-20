import React, { useState } from 'react';

const State = () => {

    const [car, setCar] = useState('Ferrari');

    const ChangeCar = () => {
        setCar(car === 'Ferrari' ? 'Jaguar' : "Ferrari")
    }

   return (
       <div>
           <h1>
              {car} 
           </h1>
           <button onClick={ChangeCar}>
               Change
           </button>
       </div>
   );
}
 
export default State;
