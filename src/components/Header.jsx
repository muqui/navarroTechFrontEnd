import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from "../context/ModalContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleOpenModal } = useModal();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOpenLogin = () => {
    navigate('/login');
  };

  const handleOpenRegister = () => {
    navigate('/register');
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">NavarroTECH</a>

        {/* Botón del menú móvil */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav className={`lg:flex lg:items-center lg:space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
          <a href="/" className="block py-2 lg:py-0 text-gray-700 hover:text-blue-600">Inicio</a>
          <a href="#servicios" className="block py-2 lg:py-0 text-gray-700 hover:text-blue-600">Servicios</a>
          <a href="#contacto" className="block py-2 lg:py-0 text-gray-700 hover:text-blue-600">Contacto</a>

          {/* Opcionales: Login y Registro */}
          {/* 
          <button onClick={handleOpenLogin} className="text-gray-700 hover:text-blue-600">Login</button>
          <button onClick={handleOpenRegister} className="text-gray-700 hover:text-blue-600">Registro</button>
          */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
