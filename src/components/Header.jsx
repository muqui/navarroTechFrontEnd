import React, { useState } from 'react';
import Registro from './Registro'; // Asegúrate de importar el componente Registro
import Login from './Login'; // Asegúrate de importar el componente Login
import Modal from "./Modal";
import { useModal } from "../context/ModalContext";
import { useNavigate } from 'react-router-dom';


function Header() {
  const { showModal, handleOpenModal, handleCloseModal } = useModal(); // Usa el hook aquí
  
  const [showRegistro, setShowRegistro] = useState(false); // Estado para controlar la visibilidad del formulario de registro
  
  // Función para abrir y cerrar el formulario de registro
  const toggleRegistroForm = () => {
    setShowRegistro(!showRegistro);
  };
  const navigate = useNavigate();

  const handleOpenLogin = () => {
    
    navigate('/login');
  };

  const handleOpenRegister = () => {
   
    navigate('/register');
  };
  
  return (
    <header className="header">
      <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light">
        <div className="container-lg">
          <a className="navbar-brand text-primary fw-bold fs-4" href="#">
            NavarroTECH
          </a>
          
          {/* Menú de navegación que será colapsable en pantallas pequeñas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#servicios">Servicios</a>
              <a className="nav-link" href="#contacto">Contacto</a>

             
              
              {/* Botón  login */}
              <button onClick={handleOpenLogin} className="btn btn-link nav-link">
                Login
              </button>
                {/* Botón Registro */}
                <button onClick={handleOpenRegister} className="btn btn-link nav-link">
                Registro
              </button>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
