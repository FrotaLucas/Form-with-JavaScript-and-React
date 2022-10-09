import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import Lista from './components/Lista';
import Evento from './components/Evento';
import Formulario from './components/Formulario';
import Condicional from './components/Eventobutton/Condicional'
import Outralista from './components/Eventobutton/Outralista';
import {useState} from 'react';
import Seunome from './components/Eventobutton/Seunome';
import Saudacao from './components/Eventobutton/Saudacao';

function App() {
  const Meusitens=['Naiv','Ingenuo','Naif']
  const [nome,setname] = useState('jorge')


  return (
    <div className="App">
    {/*<Pessoa nickname="Lucas" age="28" ocupation="student" />
     <Lista/>*/} 
    {/*<Formulario/>*/} 
    {/*<Evento numero={100}/>*/}

    {/*<h2> Renderizacao condicional</h2>
    <Condicional/>*/}

    {/*<Outralista item={Meusitens}/>*/}
    <Seunome setname={setname} />
    <Saudacao nome={nome}/>
    </div>
  );
}

export default App;


      /*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/
