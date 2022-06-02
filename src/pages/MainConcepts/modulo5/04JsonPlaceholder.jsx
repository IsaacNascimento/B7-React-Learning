import React, { useEffect, useState } from "react";

const JsonPlaceholder = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const [addTitle, setAddTitle] = useState("");
  const [addBodyText, setAddBodyText] = useState("");


  const HandleInputChange = (event) => {
     setAddTitle(event.target.value);
 
  }

  const HandleTextChange = (event) => {
     setAddBodyText(event.target.value);
   
  }

  const HandleClick = () => {
     alert(addTitle+ '  ' +addBodyText)
  }

  useEffect(() => {
    ShowJson();
  }, []);

  const ShowJson = async () => {
    setLoading(true);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    setPost(json);
    setLoading(false);
    console.log(response);
  };

  return (
    <div>
      {loading && <div>Carregando...</div>}

      <fieldset className="block border-2 p-3 mb-3 border-zinc-600 outline-none">
        <legend>Novo Post</legend>
        <input 
          value={addTitle} 
          onChange={HandleInputChange}
          type="text" 
          placeholder="Crie um novo post" />
        <textarea 
          value={addBodyText} 
          onChange={HandleTextChange}
          className="block border" />
        <button 
          className="block bg-sky-400 py-2 rounded-sm w-40 m-2"
          onClick={HandleClick}
          >

          Adicionar
        </button>
      </fieldset>

      {!loading && post.length > 0 && (
        <>
          <h1>Total de Posts: {post.length}</h1>
          {post.map((item, index) => (
            <div className="my-4" key={index}>
              <h5 className="font-bold">Título: {item.title}</h5>
              <small>Corpo: {item.body}</small>
              <br />
            </div>
          ))}
        </>
      )}
      {!loading && post.length === 0 && (
        <>
          <div>Não há posts para serem exibidos.</div>
        </>
      )}
    </div>
  );
};

export default JsonPlaceholder;
