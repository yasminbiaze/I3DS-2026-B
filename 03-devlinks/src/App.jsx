
import './App.css'
import Link from './components/Link/Link';
import Perfil from './components/Perfil/Perfil';
import SocialLink from './components/SocialLink/SocialLink';


function App() {
 
  return (
    <div id='App'>

<Perfil fotoPerfil={"https://placehold.co/100"} > Yasmin De Biaze </Perfil>

     <div className='switch'>
      botão switch

<ul>
  <Link url={""}>Inscreva-se</Link>
</ul>

<ul>
  <Link url={""}>Minha Playlist</Link>
</ul>

<ul>
  <Link url={""}>Me pague um café!</Link>
</ul>

<ul>
  <Link url={""}>Conheça o curso DEV</Link>
</ul>

</div>
     <div className='socialLinks'>
      <SocialLink url={"https://github.com"} icon={"logo-github"} />
      <SocialLink url={"https://instagram.com"} icon={"logo-instagram"} />
      <SocialLink url={"https://youtube.com"} icon={"logo-youtube"} />
      <SocialLink url={"https://likdin.com"} icon={"logo-github"} />
     </div>
     <div className='rodape'></div>
    </div>
  );
}

export default App