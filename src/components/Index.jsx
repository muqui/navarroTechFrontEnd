import { Routes, Route } from 'react-router-dom'; // Importar Routes y Route
import '../App.css';
import Header from './Header'; // Asegúrate de que Header esté en la misma carpeta o ajusta la ruta
import Servicios from './Servicios';
import Contacto from './Contacto';
import Registro from './Registro'; // Asegúrate de que tienes el componente de Registro

function Index() {
  return (
    <div>
      <Header />
      <div className="container pt-5 mt-3">
       
        <Servicios />
        <Contacto />
      </div>
    </div>
  );
}

export default Index;
