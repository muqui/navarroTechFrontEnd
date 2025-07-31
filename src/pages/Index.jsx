import { Routes, Route } from 'react-router-dom'; // Importar Routes y Route
import '../App.css';
import Header from '../components/Header'; // Asegúrate de que Header esté en la misma carpeta o ajusta la ruta
import Servicios from '../components/Servicios';
import Contacto from '../components/Contacto';
import Registro from '../components/Registro'; // Asegúrate de que tienes el componente de Registro
import { Hero } from '../components/Hero';
import { OrderFolioForm } from '../components/OrderFolioForm';

function Index() {
  return (
    <div>
     <Header />
      <div className="max-w-7xl mx-auto pt-5 mt-3 px-4">
         
        <Hero/>
        <OrderFolioForm />
        <Servicios />
        <Contacto />
      </div>
    </div>
  );
}

export default Index;
