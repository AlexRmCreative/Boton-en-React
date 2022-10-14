import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>

      <div className='agradecimientos'>
        <h3>
          Por <span className='mi-nombre'><a href='https://www.linkedin.com/in/alejandro-roa-dev/'>Alejandro Roa</a></span>
          agradecimientos a <span className='empresa-freeCodeCamp'><a href='https://www.youtube.com/c/freeCodeCampEspañol'>freeCodeCamp Español</a></span>
        </h3>
      </div>
      
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics = {numClics} />
        <Boton 
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic} />
         <Boton 
         texto='Reiniciar'
         esBotonDeClic={false}
         manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
