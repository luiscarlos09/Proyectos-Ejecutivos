//import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Contenido } from './components/contenido';
import { useState } from 'react';


function App() {
  const [estado,setEstado] = useState(true);

  function cambiarEstado(i){
    setEstado(i);
  }
  return (
    <div className='App'>
     <Header/>
     {estado === true && <Banner></Banner>}
     <Contenido estado={cambiarEstado}/>
     <h1>{estado}</h1>
     <Header/>
    </div>
  );
}

export default App;
