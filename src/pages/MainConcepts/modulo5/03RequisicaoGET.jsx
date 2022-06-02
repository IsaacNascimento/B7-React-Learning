import React, { useEffect, useState } from "react";

const RequisicaoGET = () => {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  // const HandleLoadBtn =  () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((response) => {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //        setMovies(json);
  //     });
  //    alert("Test")
  // }

  useEffect(() => {
    HandleLoadBtn();
  }, []);

  const HandleLoadBtn = async () => {
    try {
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setMovies(json);
      console.log(json)
    } catch(e) {
      console.log(e)
      setMovies([])
    } finally {
      setLoading(false);
    }
  };
    // alert("Test")

  return (
    <div>
      {/* <button className="bg-blue-400 p-2 rounded" onClick={HandleLoadBtn}>
        Load Movies
      </button> */}
      {loading && 
      <h1>Carregando...</h1>
      }

      {!loading && movies.length > 0 && (
        <>
          <div>Total Movies: {movies.length}</div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  container md:mx-auto sm:mx-auto">
            {movies.map((item, index) => (
              <div key={index}>
                <img src={item.avatar} className="w-64 block" />
                <h4>Título: {item.titulo}</h4>
              </div>
            ))}
          </div>
        </>
      )}
      {!loading && movies.length === 0 && 
      <h1 className="text-red-600">Ocorreu um erro, tente novamente mais tarde!</h1>
      }
    </div>
  );
};

export default RequisicaoGET;
