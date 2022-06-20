import React, { useState } from "react";
import { usePeople } from "../reducers/peopleList";

export const UsoRealReducer = () => {
  const [list, dispatch] = usePeople();
  console.log(list);
  const [name, setName] = useState("");

  const handleAddButton = () => {
    if (name) {
      dispatch({
        type: "ADD",
        payload: {
          name: name,
        },
      });
    }
    setName("");
  };

  const removeById = (id: string) => {
    dispatch({
      type: "DEL",
      payload: { id },
    });
  };

  const orderByName = () => {
    dispatch({
      type: "ORDER",
      payload: {
        name: undefined,
        id: undefined,
      },
    });
  };

  return (
    <div>
      <input
        className="border-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn bg-black text-white" onClick={handleAddButton}>
        Adicionar
      </button>
      <hr />
      <button onClick={orderByName}>Ordenar</button>
      <br />
      Uso real do reducer - Lista de nomes:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              onClick={() => removeById(item.id)}
            >
               [Deletar]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
