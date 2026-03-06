import { useEffect, useState, useCallback } from "react";
import "./App.css";

import logo from "./assets/Sem nome (1920 x 500 px) (5).png";
import lupa from "./assets/search.svg";

import Rodape from "./components/Rodape/Rodape";
import MovieCard from "./components/MovieCard/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [tema, setTema] = useState("light");
  const [idioma, setIdioma] = useState("pt");

  // CHAVE DA API
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  // BUSCAR FILMES
  const searchMovies = useCallback(
    async (title) => {
      const response = await fetch(`${apiUrl}&s=${title}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    },
    [apiUrl]
  );

  // APLICAR TEMA AUTOMÁTICO
  function aplicarTema() {
    const temaSistema = window.matchMedia("(prefers-color-scheme: dark)");

    if (temaSistema.matches) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      setTema("dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      setTema("light");
    }
  }

  // BOTÃO TROCAR TEMA
  function alternarTema() {
    if (tema === "dark") {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      setTema("light");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      setTema("dark");
    }
  }

  // BOTÃO TROCAR IDIOMA
  function alternarIdioma() {
    if (idioma === "pt") {
      setIdioma("en");
    } else if (idioma === "en") {
      setIdioma("es");
    } else {
      setIdioma("pt");
    }
  }

  // CARREGAR FILME INICIAL
  useEffect(() => {
    aplicarTema();
    searchMovies("Hulk");
  }, [searchMovies]);

  // OUVIR MUDANÇA DO TEMA DO SISTEMA
  useEffect(() => {
    const temaSistema = window.matchMedia("(prefers-color-scheme: dark)");

    temaSistema.addEventListener("change", aplicarTema);

    return () => {
      temaSistema.removeEventListener("change", aplicarTema);
    };
  }, []);

  return (
    <div id="App">

      <img
        id="Logo"
        src={logo}
        alt="Logotipo do serviço de streaming Yasflix"
      />

      {/* BOTÃO TEMA */}
      <button className="theme-button" onClick={alternarTema}>
        {tema === "dark" ? "☀️" : "🌙"}
      </button>

      {/* BOTÃO IDIOMA */}
      <button className="language-button" onClick={alternarIdioma}>
        {idioma === "pt" && "🇧🇷"}
        {idioma === "en" && "🇺🇸"}
        {idioma === "es" && "🇪🇸"}
      </button>

      <div className="search">
        <input
          onKeyDown={(e) => e.key === "Enter" && searchMovies(search)}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={
            idioma === "pt"
              ? "Pesquise por filmes"
              : idioma === "en"
              ? "Search for movies"
              : "Buscar películas"
          }
        />

        <img
          onClick={() => searchMovies(search)}
          src={lupa}
          alt="Botão de pesquisa"
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} apiUrl={apiUrl} />
          ))}
        </div>
      ) : (
        <h2 className="empty">
          {idioma === "pt"
            ? "😢 Filme não encontrado 😢"
            : idioma === "en"
            ? "😢 Movie not found 😢"
            : "😢 Película no encontrada 😢"}
        </h2>
      )}

      <Rodape link={"https://github.com/ProfCastello"}>
        YasBiaze
      </Rodape>

    </div>
  );
};

export default App;