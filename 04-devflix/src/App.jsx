import "./App.css";

import logo from "./assets/devflix.png";
import lupa from "./assets/search.svg";
import Rodape from "./components/Rodape/Rodape";

const App = () => {
  return (
    <div id="App">
      <img
        id="logo"
        src={logo}
        alt="Logotipo do serviço de streaming DEVFLIX com letras vermelhas 
    e fundo preto, destacando a plataforma de conteúdo de vídeos sob demanda."
      />

      <div className="search">
        <input type="text" placeholder="Pesquise por filmes e séries..." />
        <img src={lupa} alt="Botão de ação para pesquisa!" />
      </div>

      <Rodape link={"https://github.com/yasminbiaze"}>Yasmin De Biaze</Rodape>
    </div>
  );
};

export default App;
