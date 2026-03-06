<<<<<<< HEAD
import { useEffect, useState, useCallback } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 4e356f030f26758953c129d8f30f521affa68e0d
import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
<<<<<<< HEAD
  const [search, setSearch] = useState("");
=======
>>>>>>> 4e356f030f26758953c129d8f30f521affa68e0d

  //Utilizando uma CHAVE de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Criando a conexão com a API e trazendo informações
<<<<<<< HEAD
  const searchMovies = useCallback(
    async (title) => {
      const response = await fetch(`${apiUrl}&s=${title}`);
      const data = await response.json();

      //Alimentando a variavel movies
      setMovies(data.Search);
    },
    [apiUrl],
  );

  useEffect(() => {
    (async () => {
      await searchMovies("Hulk"); // termo para pesquina ao carregar o site
    })();
  }, [searchMovies]);
=======
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //Alimentando a variavel movies
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);
>>>>>>> 4e356f030f26758953c129d8f30f521affa68e0d

  return (
    <div id="App">
      <img
        id="Logo"
        src={logo}
        alt="Logotipo do serviço de streaming Devflix, com letras vermelhas e fundo preto, promovendo conteúdo de séries, filmes e entretenimento online."
      />

      <div className="search">
<<<<<<< HEAD
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
        />
        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de ação para pesquisa!"
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😢 Filme não encontrado 😢</h2>
      )}

      <Rodape link={"https://github.com/ProfCastello"}>YasBiaze</Rodape>
=======
        <input type="text" placeholder="Pesquise por filmes" />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      {movies?.length > 0 ? 
(
<div className="container">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
  )
  : (
    <h2>😢 Filme não encontrado 😢</h2>
  )};
      
     
 
      <Rodape link={"https://github.com/ProfCastello"}>Yasmin De Biaze</Rodape>
>>>>>>> 4e356f030f26758953c129d8f30f521affa68e0d
    </div>
  );
};

export default App;
