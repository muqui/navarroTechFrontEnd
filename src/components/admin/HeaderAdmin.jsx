import React, { useState } from 'react';
import Modal from '../Modal';
import OrderNew from '../OrderNew';
import { useModal } from '../../context/ModalContext';
import { useAuth } from '../../context/AuthContext';
import UserCreate from './UserCreate';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import { useNavigate } from 'react-router-dom';
function HeaderAdmin({ onChangeView }) {
  const { showModal,updateOrders, handleOpenModal, handleCloseModal } = useModal(); // Usa el hook aquí
  const { logout, token } = useAuth(); // Accede a la función logout y token desde el contexto
  const navigate = useNavigate(); // Para redirigir después de hacer logout

  const handleLogout = () => {
    logout(); // Llamamos a la función logout que eliminará el token y el user del localStorage
    navigate("/login"); // Redirigimos al login después de cerrar sesión
  };
 

  return (
    <header className="header">
      <nav className="navbar navbar-light fixed-top navbar-expand-lg bg-light">
        <div className="container-lg">
          <a className="navbar-brand text-primary fw-bold fs-4" href="#">
            NavarroTECH (Admin)
          </a>
  

          {/* Menú de navegación visible siempre */}
          <div className="navbar-nav ms-auto">
          <button onClick={() => onChangeView('technician')} className="btn btn-link">
               Tecnicos
            </button>
          <button onClick={() => onChangeView('client')} className="btn btn-link">
               Clientes
            </button>
            <button onClick={() => onChangeView('orders')} className="btn btn-link">
               Ordenes
            </button>


          
            {/* Mostrar botón de "Cerrar sesión" solo si el token está presente */}
            {token && (
              <button onClick={handleLogout} className="btn btn-link">
                Cerrar sesión
              </button>
            )}

    
          </div>
        </div>
      </nav>


    
    
    </header>
  );
}

export default HeaderAdmin;
