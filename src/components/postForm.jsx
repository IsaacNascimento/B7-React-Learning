import React, { useState } from 'react';

export const PostForm = ({ onPost }) => {
  const [addTitle, setAddTitle] = useState('');
  const [addBodyText, setAddBodyText] = useState('');

  const handleAddClick = () => {
    if ((addTitle, addBodyText)) {
      onPost(addTitle, addBodyText);
    } else {
      alert('Preencha os campos');
    }
  };
  return (
    <>
      <h1>
        <fieldset className="block border-2 p-3 mb-3 border-zinc-600 outline-none">
          <legend>Novo Post</legend>
          <input
            value={addTitle}
            onChange={(e) => setAddTitle(e.target.value)}
            type="text"
            placeholder="Crie um novo post"
          />
          <textarea
            value={addBodyText}
            onChange={(e) => setAddBodyText(e.target.value)}
            className="block border"
          />
          <button
            className="block bg-sky-400 py-2 rounded-sm w-40 m-2"
            onClick={handleAddClick}
          >
            Adicionar
          </button>
        </fieldset>
      </h1>
    </>
  );
};
